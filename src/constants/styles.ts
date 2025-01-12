import { StyleSheet, ActivityIndicator, Dimensions } from 'react-native';
import { Colors } from './colors';

import { useFonts } from 'expo-font'; 
import { OpenSans_400Regular, OpenSans_700Bold } from '@expo-google-fonts/open-sans'; // Importing another font
import {
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from '@expo-google-fonts/inter';

export const Fonts = () => {
   // Load the fonts using expo-google-fonts
   const [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_700Bold,
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
  });

}

const styles = StyleSheet.create({
  container: {
    fontFamily: 'OpenSans_400Regular, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    flex: 1, // Ensure the container takes full screen height
  },

  imageBackground: {
    flex: 1,
    width: '100%',
    justifyContent: 'center', // Center the content
    alignItems: 'center', // Center the content
  },

  page:{
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    width: Dimensions.get('window').width,
  },

  content: {
    flexDirection: 'row',
  },
  header: { 
    paddingVertical: 15,
  },

  row:{
    flexDirection: 'row',
    justifyContent: 'center', // Ensure that items align properly without excess space
    alignItems: 'center',
    alignContent: 'center',
    marginVertical: 0, // Ensure no vertical margin
    paddingVertical: 10, 
    paddingHorizontal: 15,
    flexWrap: 'wrap',
    width:'100%'
  },

  column:{
    flex:1,
    flexDirection:'column',
    width:'100%',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },

  taskHeader:{
    alignItems:'flex-start',
    flex: 1,
  },

  linkButton: {
    backgroundColor: '#B07CEB', 
    borderRadius: 60,         
    justifyContent: 'center',  
    alignItems: 'center', 
    width:50,
    height:50,
  },

  addButton:{
    alignItems:'flex-end',
    marginRight:10,
    position: 'relative',
    top:10,
  },

  scrollContent: {
    flexGrow: 1,
    paddingBottom: 60, // Adjust based on bottom nav height
  },

  smallHeader: {
    fontSize:16,
    fontWeight: 'regular',
    color: '#666',
    textAlign: 'left',
  },

  card: {
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    alignContent: 'flex-start',
    textAlign: 'center',
    justifyContent: 'flex-start',
  },

  cardRight: {
    ...Colors.darkBtn,
    padding: 8,
    height: 130,
    width:'46%',
    marginLeft: 10
  },

  cardLeft:{
    ...Colors.lightBtn,
    padding: 8,
    height: 130,
    width:'46%',
    marginRight: 10,
  },


  cardWhite: {
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    alignContent: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    marginHorizontal:10,
    width:'100%',
    padding:25,

  },

  descriptionText: {
    fontSize: 14,
    color: '#000',
    flexShrink: 1, // Prevent long text from stretching the card
  },
  chartContainer: {
    height: 200, // Limit the height of the container
    justifyContent: 'center',
    alignItems: 'center',
  },

  cardIcon: {
    marginHorizontal:3,
  },

  cardTitle: {
    fontSize: 14,
    fontWeight: '700',
    textTransform: 'uppercase', 
    textAlign: 'center'
  },

  cardTitleLeft: {
    fontSize: 14,
    fontWeight: '600',
    textTransform: 'uppercase', 
    textAlign: 'center',
    ...Colors.darkPurpleText
  },

  cardTitleRight:{
    fontSize: 14,
    fontWeight: '600',
    textTransform: 'uppercase', 
    textAlign: 'center',
    ...Colors.lightPurpleText
  },

  miniCardSubText: {
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'left',
    lineHeight: 20,
  },

  cardSubText: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },

  cardSubTextWhite: {
    fontSize: 16,
    color:'white',
    fontWeight: '500',
    textAlign: 'left',
    paddingHorizontal:15,
    lineHeight:20,
    paddingBottom:15,
  },

  cardDescLeft: {
    fontSize: 36,
    fontWeight: '900',
    width:'100%',
    textAlign: 'center',
    color: '#333'
  }, 

  cardDescRight: {
    fontSize: 36,
    fontWeight: '900',
    width:'100%',
    textAlign: 'center',
    color: 'white'
  }, 

  cardDescription: {
    fontSize: 36,
    color: '#333',
    fontWeight: '900',
    width:'100%',
    textAlign: 'center'
  },
 
  headerText: { 
    ...Colors.headerText,
    fontSize: 24, 
    textAlign: 'left',
    fontFamily: 'Inter_800ExtraBold', 
  },

  cardHeaderText : {
    ...Colors.headerText,
    fontSize: 24, 
    textAlign: 'left',
    fontFamily: 'Inter_800ExtraBold', 
    padding:15
  },

  cardHeaderTextWhite : {
    color:'white',
    fontSize: 24, 
    textAlign: 'left',
    fontFamily: 'Inter_800ExtraBold', 
    paddingHorizontal:15,
    paddingTop:15,
  },

  headerTextWhite: {
    color:'white',
    fontSize: 24, 
    textAlign: 'left',
    fontFamily: 'Inter_800ExtraBold', 
  },

  titleText: {
    ...Colors.title,
    fontSize: 20
  },


  footer: { padding: 8, alignItems: 'center' },
  text: {
    fontSize: 20,
  },
  splash:{
    marginBottom: 20,
    height:250,
    width:250
  },

  splashBg:{
    ...Colors.splashBg,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carousel: {
    flex:1,
    justifyContent : 'center',
    alignItems: 'center',
  },
  pageContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  carouselImg: {
    width: 400,
    height: 400,
    resizeMode: 'contain',
    marginBottom: 50, 
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: '900',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
    textTransform: 'uppercase', // Transforms text to uppercase
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
  pageSubtitle: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
  },

  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },

  blueTagBg : {
    ...Colors.blueTagBg
  },

  purpleBg: {
    ...Colors.darkPurpleBg
  },
  buttonContainer : {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'stretch', 
    paddingVertical:30,
    paddingHorizontal: 25,
  },

  button: {
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 5,
    marginHorizontal : 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    fontSize: 16
  },

  longBtn : {
    width: '100%',            
    flexDirection: 'row',      
    alignItems: 'stretch', 
    justifyContent: 'center',
    ...Colors.darkBtn,
    borderRadius: 50,
    shadowColor: '#375DFB', // Color of the shadow
    shadowOffset: { width: 0, height: 4 }, // Horizontal and Vertical offset
    shadowOpacity: 0.1, // Shadow opacity
    shadowRadius: 6, // Blur radius
    // Shadow for Android
    elevation: 5, // Elevation for Android shadow  
  },

  darkBtn: {
    ...Colors.darkBtn,
    borderRadius: 50,
    shadowColor: '#375DFB', // Color of the shadow
    shadowOffset: { width: 0, height: 4 }, // Horizontal and Vertical offset
    shadowOpacity: 0.1, // Shadow opacity
    shadowRadius: 6, // Blur radius
    // Shadow for Android
    elevation: 5, // Elevation for Android shadow
  },

  lightBtn: {
    ...Colors.lightBtn,
    borderRadius: 50,
    shadowColor: '#9251DB', // Color of the shadow
    shadowOffset: { width: 0, height: 4 }, // Horizontal and Vertical offset
    shadowOpacity: 0.1, // Shadow opacity
    shadowRadius: 6, // Blur radius
    // Shadow for Android
    elevation: 5, // Elevation for Android shadow
  },

  darkBtnText: {
    ...Colors.darkBtn,
    fontSize: 18,
    paddingHorizontal : 25,
    fontWeight : '700',
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },

  lightBtnText: {
    ...Colors.lightBtn,
    fontWeight : '700',
    paddingHorizontal : 25,
    fontSize: 18,
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },

  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },

  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 3,
    backgroundColor: '#B6B6D8', // Default color for unselected dots
  },

  paginationDotActive: {
    width: 20,
    height: 10,
    backgroundColor: '#6C63FF', // Active dot color
  },

  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  required: {
    color: 'red',
  },

  tabLabel: {
    fontSize: 16,
    textAlign: 'center',
  },
  focusedTabLabel: {
  },

  tabContainer: {
    borderWidth: 0,
    height: 70,
    justifyContent: 'center'
  },

  tabBar: {
    height:70
  },
  tasksTabStyle: {

  },

  circle: {
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: '#1573FF',
    justifyContent: 'center',
    alignItems: 'center',
    // Center the icon inside the circle
    borderWidth: 7,  // Optional white border around the circle
    borderColor: '#FFFFFF',
    position:'relative',
    top: -5,
  },

  cardNormalTitle:{
    color: '#333'
  },
  lineStyle:{
    borderWidth: 0.5,
    borderColor:'#dadada',
    width: '100%',
    marginVertical: 20
  },

  verticalLine: {
    position: 'absolute',
    height: '100%', // Full height of the chart container
    width: 1, // Thickness of the line
    backgroundColor: '#dadada', // Line color
    left: '50%', // Center the line (adjust based on your requirement)
  },

  graphContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    padding: 15
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  legendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  legendRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 5,
    marginBottom: 5,
  },
  legendText: {
    fontSize: 12,
    color: 'black',
  },
  centerLabel: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerText: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
  },
  centerSubText: {
    fontSize: 14,
    color: 'white',
  },

  blueTag: {
    backgroundColor: '#DEEDFF',
    color:'#376BA7',
    fontWeight: '600',
    paddingHorizontal: 5,
    borderRadius:8,
    marginVertical: 8,
    textAlign:'center',
    fontSize: 14,
  }, 

  greenTag: {
    backgroundColor: '#DEFEE4',
    color:'#3F7E4B',
    fontWeight: '600',
    paddingHorizontal: 5,
    borderRadius:8,
    marginVertical: 8,
    textAlign:'center',
    fontSize: 14,
  }, 

  purpleTag: {
    backgroundColor: '#EDDEFE',
    color:'#735990',
    fontWeight: '600',
    paddingHorizontal:5 ,
    borderRadius:8,
    marginVertical: 8,
    textAlign:'center',
    fontSize: 14,
  },

  addMargin: {
    marginHorizontal: 8
  },
  
  addRightMargin:{
    marginRight:8,
  },

  profileImg: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#CDD9E3',
    marginRight: 10,
    justifyContent:'flex-start',
  },

  profileName: {
    color:'#8EF6FF'
  },


  linkText: {
    color: '#4D81E7',
    fontSize: 16,
    textTransform: 'capitalize',
    fontFamily: 'OpenSans_400Regular',
    flexDirection: 'row',
  },

  linkIcon:{
    color: '#4D81E7',
    marginRight: 8,
    fontSize: 16,
    position: 'relative',
    top: 5
  },

  headerRow:{
    paddingVertical:25,
    flexDirection: 'row',
    width: '100%',
    justifyContent:'space-evenly',
    alignItems:'center',
    alignContent:'space-evenly'
  },

  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Distribute items evenly
    paddingHorizontal: 15,
    paddingVertical: 20,
    width:'100%',
  },

  LeftAlign :{
    flexDirection: 'row',
    textAlign:'left',
    alignItems: 'center',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    width:'90%'
  },

  backButton: {
    flex: 1, // Reserve space for alignment
    alignItems: 'flex-start',
  },

  headerTitle: {
    flex: 3, // Center column
    textAlign: 'center', // Ensure title is centered
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  iconButton: {
    flex: 1, // Reserve space for alignment
    alignItems: 'flex-end',
  },

  backgroundCard: {
    backgroundColor:'white',
    borderRadius:20,
    paddingVertical:15,
    paddingHorizontal: 25,
  }, 

  rewardRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Ensures equal spacing between items
    alignItems: 'center', // Align items vertically
    borderRadius: 8,
    alignContent: 'center',
    marginVertical: 20
  },

  iconBg: {
    width:40,
    height: 40,
    justifyContent:'center',
    alignContent: 'center',
    alignItems:'center',
    textAlign:'center',
    marginRight: 8
  },

  rewardIcon: {
    marginRight: 8,
  },
  
  saverType: {
    flexDirection: 'row', // Arrange items in a horizontal row
    alignItems: 'center', // Vertically center align items
    justifyContent: 'center', // Center content horizontally if needed
    flex: 1, // Equal space allocation
  },
  
  saverText: {
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'Inter_700Bold',
    fontSize: 16,
    marginLeft: 5, // Add spacing between icon and text
  },
  
  
  rewardCard : {
    backgroundColor: 'white',
    borderRadius: 20,
    height:'auto',
    paddingHorizontal:25,
    paddingVertical:15,
    justifyContent:'flex-start',
    alignContent: 'flex-start',
  },
  
  rewardMiniCard: {
    borderWidth: 1,
    borderColor: '#CDD9E3',
    paddingVertical: 15,
    borderRadius: 15,
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    textAlign: 'left',
    flexWrap: 'wrap', // Allow wrapping of child elements
    width: '100%', // Ensure the card doesn't exceed its container
    backgroundColor:'white'
  },

  rewardMiniCardSmall:{
    flex:1, 
    marginHorizontal:5,
  },


  rewardMiniCardRow : {
    flexDirection: 'row',
    justifyContent: 'flex-start', // Ensure that items align properly without excess space
    alignItems: 'center',
    marginVertical: 0, // Ensure no vertical margin
    paddingVertical: 10, 
    paddingHorizontal: 15,
    flexWrap: 'wrap',
    width:'100%',
  },

  rewardImg:{
    borderColor:'white',
    borderWidth: 5,
    width:60,
    height:60,
  },

  stacked: {
    position:'absolute',
  },

  rewardProfilecounter: {
    backgroundColor: '#FFB057',
    width:60,
    height:60,
    borderWidth:5,
    borderColor: 'white',
    color:'white',
    fontWeight: '700',
    fontSize: 18,
    fontFamily: 'Inter_600SemiBold',
    borderRadius:60,
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center'
  },

  rewardTag : {
    backgroundColor:'#000',
    color:'#8EF6FF',
    paddingHorizontal:12,
    paddingVertical:8,
    borderRadius:24,
  },

  ProfileIconsContainer: {
    flexDirection: 'row',
    position: 'relative',
    minHeight: 60,
  },

  rewardDate :{
    color:'#666',
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Inter_500Medium'
  },

  progressContainer: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textContainer: {
    position: 'absolute',
    top: '35%',
    left: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
  },

  textSuffix: {
    fontSize: 24,
    fontWeight: 'normal',
    color: 'black',
  },

  inputContainer: {
    marginVertical: 15,  
    flex: 1,
    justifyContent: 'center',
  },
  
  toggleContainer: {
    flexDirection: 'row',
    marginVertical: 25,  // Adds space between toggle buttons
  },

  toggleItem:{
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  
  toggleLabel: {
    marginRight: 10,
    fontWeight: 'bold',
    fontSize:18,
    justifyContent : 'flex-start',
    alignItems: 'flex-start'
  },
  
  sliderContainer: {
    marginTop: 10,
  },
  
  slider: {
    width: '100%',
    height: 40,
  },
  
  sliderLabelContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  
  sliderLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color:'#9251DB',
  },
  
  minMaxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10,
    marginTop: 5,
  },
  
  minMaxLabel: {
    fontSize: 14,
    color: '#555',
  },
  
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 14, // Horizontal padding
    paddingVertical: 15, // Vertical padding
    fontSize: 16,
    backgroundColor: '#fff', // White background
    height: 'auto',
    flexGrow: 1, // Allow it to grow as needed
    marginBottom: 10,  // Add margin to prevent overlap
  },
  
  textarea: {
    height: 100,
    textAlignVertical: 'top',
    flexShrink: 0, 
    paddingHorizontal: 14, 
    paddingVertical: 25, 
    backgroundColor: '#fff', 
    marginBottom: 10,  // Add margin to avoid overlap with other inputs
  },
  
  optionsContainer: {
    justifyContent: 'flex-start',
    marginBottom: 25, 
  },
  
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  
  radioCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#6C63FF',
    marginRight: 10,
  },
  
  radioSelected: {
    backgroundColor: '#6C63FF',
  },
  
  checkboxOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  
  checkboxBox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#6C63FF',
    marginRight: 10,
  },
  
  checkboxSelected: {
    backgroundColor: '#6C63FF',
  },
  
  selectContainer: {
    width: '100%',
    height: 'auto',
    backgroundColor: '#fff',
    paddingHorizontal: 14, 
    paddingVertical: 25,   
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10, // Add margin to prevent overlap with other fields
  },
  
  purpleBtn: {
    backgroundColor:'#9251DB',
    paddingHorizontal: 25,
    paddingVertical: 20,
    color:'white',
    borderRadius: 55,
    flex: 1,
    justifyContent:'center',
    alignContent: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'Inter_700Bold',
    fontSize: 20,
    marginVertical: 10,
  },

  orangeBtn: {
    backgroundColor:'#FF9D23',
    paddingHorizontal: 25,
    paddingVertical: 20,
    color:'white',
    borderRadius: 55,
    flex: 1,
    justifyContent:'center',
    alignContent: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'Inter_700Bold',
    fontSize: 20,
    marginVertical: 10,
  },

  profileList: {
    backgroundColor: '#EEEEEE',
    paddingVertical:15, 
    flex: 1,
    borderRadius:25,
    width: '100%',
    marginBottom: 20,
  },

  profileWrap:{
    width:'70%',
    textAlign:'left',
    marginLeft: 8
  },

  name: {
    color: '#333',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily : 'Inter_700Bold',
  },

  email:{
    color:'#666',
    fontWeight : 'regular',
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
  },

});

export default styles;