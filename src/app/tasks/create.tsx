import React from 'react';
import { Page } from '@/screens/Page';
import { View, Text, ActivityIndicator } from 'react-native';

import styles from '@/constants/styles';
import { Card } from '@/components/Cards';
import { Column, Row } from '@/components/Row';
import { Graph } from '@/components/Graph';
import { Tags } from '@/components/Tags';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ProfileIcons, ProfileRow, ProfileIconsContainer } from '@/components/Profile';
import { TextLink } from '@/components/Link';
import { RewardCard, RewardMiniCard, RewardsRow, RewardDate } from '@/components/RewardCardItem';

import CircularProgress from 'react-native-circular-progress-indicator';
import { Inputs } from '@/components/Inputs';

import axios from 'axios';

const generate_tasks = async () => {
    try {
      const response = await axios.get('http://192.168.50.206:8000/api/genTask/');
      if (response.status === 200) {
        const data = response.data;
		console.log(data);
      } else {
        console.error('Failed to fetch tasks:', response.status);
      }
    } catch (error) {
      console.error('Error generating tasks:', error);
    }
  };

const FieldsSummry = () => (
	<>
	<Inputs
			title="Assigned To"
			fieldType="select"
			required={true}
			options={['Apple', 'Banana', 'Orange', 'Grapes']}
			/>

	<Inputs title="Task Name" fieldType="text" required={true} placeholder='Needs vs. Wants' />
	<Inputs title="Reward Amount" fieldType="number" required={true} placeholder='50' />
	<Inputs title="Details" fieldType="textarea" required={true} placeholder='Understand the difference between needs and wants.'  />
	<Inputs title="Difficulty" fieldType="text" required={true} placeholder='Easy' />
	<TextLink type={'button'} className={styles.orangeBtn} title={'Generate Task'} onPress={generate_tasks} />
	<TextLink type={'button'} className={styles.purpleBtn} title={'Create Task'} url={'/tasks/create'} />
	</>
)

export default function CreateTasksPage() {
  return (
    <Page
      title="Task Creation"
	  backurl={'/tasks/tasks'}
      content={
        <>
        	<View style={styles.container}>
				<RewardCard>
					<FieldsSummry />
				</RewardCard>
        	</View>
        </>
      }
    />
  );
}
