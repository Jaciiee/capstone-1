from crewai import Agent, Task, Crew, Process, LLM
from langchain_ollama import OllamaLLM
from pydantic import BaseModel

class TaskSchema(BaseModel):
    title: str
    description: str
    difficulty: str
    rewards: int

llm = LLM(
    model="ollama/openhermes",
    base_url="http://localhost:11434"
)

llama = LLM(
    model="ollama/llama3.2",
    base_url="http://localhost:11434"
)

taskGiver = Agent (
    role = "Task Giver",
    goal = (
        "Generate *ONE* creative, age-appropriate chore for children aged 6 to 12 that can be done at home. "
        "Chore should be realistic and safe for children to do at home, specifically in Singapore. "
        "Include the following details for each task: "
        "- Task title (brief but descriptive). "
        "- Task description (clear and detailed instructions). "
        "- Difficulty level (easy, medium, or hard). "
        "- Rewards (based on difficulty, ranging from $5 to $20). "
        "Ensure the tasks encourage responsibility, or creativity while being achievable by children."
        ),
    backstory=(
        "I am a caring mother who wants to give my child meaningful and fun tasks to help out around the house. "
        "I want the chores to teach my child to be responsible and creative while being safe and achievable."
        ),
    llm = llm,
    verbose=True,
    allow_delegation=False
)

taskValidator = Agent (
    role = "Task Validator",
    goal = (
        "Review and validate the chore provided by the Task Giver. "
        "Ensure each chore is age-appropriate, safe, and feasible for children aged 6 to 12 to accomplish at home. "
        "Ensure the chore is suitable for children in Singapore and can be done at home. "
        "Ensure that only one chore is provided. "
        "Summarize the chore in the specified JSON format, ensuring that each task includes the following fields: "
        "- 'title' (brief title). "
        "- 'description' (detailed instructions). "
        "- 'difficulty' (easy, medium, hard). "
        "- 'rewards' (amount between $1 and $10, based on difficulty)."
        ),
    backstory=(
        "I am a thoughtful father who reviews the chore to ensure they are suitable for my child. "
        "I aim to validate and summarize the chore in a structured format."
        ),
    llm = llm,
    verbose=True,
    allow_delegation=False
)

formatValidator = Agent (
    role = "Format Validator",
    goal = (
        "Review and validate the format of the chore provided by the Task Validator is correct."
        "Ensure the chore is specified in a JSON format, ensuring that each task includes the following fields: "
        "- 'title' (brief title). "
        "- 'description' (detailed instructions). "
        "- 'difficulty' (easy, medium, hard). "
        "- 'rewards' (amount between $5 and $20, based on difficulty)."
        ),
    backstory=(
        "I am an enforcer that ensures the format of the chore adhere strictly to this specified format"),
    llm = llama,
    verbose=True,
    allow_delegation=False
)

task1 = Task(
    description=(
        "Generate *ONE* age-appropriate, safe, and realistic tasks for children aged 6 to 12 to do at home in Singapore. "
        "The output should include a detailed task description, difficulty level (easy, medium, or hard), and reward amount "
        "($5 to $20 based on task difficulty)."
        ),
    agent=taskGiver,
    expected_output=(
        "A JSON object with the fields: 'title', 'description', 'difficulty', and 'rewards'. "
        "Example: {'title': 'Tidy Your Room', 'description': 'Organize toys, books, and clothes in your room.', "
        "'difficulty': 'easy', 'rewards': 2}"
        )
)

task2 = Task(
    description=(
        #"Validate the tasks given to the child, and make sure it is doable by a 6-12 year old child"
        "Validate the tasks provided by the Task Giver. Ensure they are appropriate for children in Singapore aged 6 to 12, "
        "safe, and feasible. Summarize the task in the following JSON format: "
        "{'taskID': int, 'title': str, 'description': str, 'difficulty': str, 'rewards': int}."
        ),
    agent=taskValidator,
    expected_output=(
        #"A JSON object with 'taskID', 'title' , 'description', 'difficulty' and 'rewards' fields."
        "A JSON object with validated task details, including fields: 'title', 'description', "
        "'difficulty', and 'rewards'."
        ),
    output_json=TaskSchema
)

task3 = Task(
    description=(
        "Validate the format of the task provided by the Task Validator. "
        "Ensure the chore is specified in a JSON format, ensuring that each task includes the following fields: "
        "- 'title' (brief title). "
        "- 'description' (detailed instructions). "
        "- 'difficulty' (easy, medium, hard). "
        "- 'rewards' (amount between $5 and $20, based on difficulty)."
        ),
    agent=formatValidator,
    expected_output=(
        "A JSON object with the fields: 'title', 'description', 'difficulty', and 'rewards'. "
        "Example: {'title': 'Clean Your Room', 'description': 'Organize toys, books, and clothes in your room.', "
        "'difficulty': 'easy', 'rewards': 5}"
        ),
    output_json=TaskSchema
)

crew = Crew(
    agents=[taskGiver, taskValidator, formatValidator],
    tasks=[task1, task2, task3],
    verbose=True,
    process=Process.sequential
)

def generateTask():
    result = crew.kickoff()
    task = {
        "title": result['title'],
        "description": result['description'],
        "difficulty": result['difficulty'],
        "rewards": result['rewards'],
    }
    print(task)
    return task
