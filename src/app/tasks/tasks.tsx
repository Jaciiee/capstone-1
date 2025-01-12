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


const MiniCardInfo = ({split, chart} : {split?:boolean, chart?:boolean}) => (
	<>
	{/* {!split && (
      <View style={styles.rewardMiniCardRow}>
        <Text style={styles.rewardTag}>Get 500 Points</Text>
      </View>
    )} */}

	<View style={styles.rewardMiniCardRow}>
	<Text style={styles.headerText}>Clean up your room</Text>
	<Text style={styles.miniCardSubText}>Be a good boy and clean up your room</Text>
	</View> 

	<View style={styles.rewardMiniCardRow}>
	<Tags className={styles.purpleTag} text={ 'Difficulty: Easy' } marginClass={styles.addRightMargin}/>
	<Tags className={styles.greenTag} text={ 'Rewards: $10' } marginClass={styles.addRightMargin}/>
	<Tags className={styles.blueTag} text={ 'Status: New' } marginClass={styles.addRightMargin}/>
	</View>
	
	<View style={styles.rewardMiniCardRow}>
		{chart ? (
			<Column>
				<View style={styles.rewardMiniCardRow}>
				<ProfileIconsContainer count={4}>
					<ProfileIcons img={require('@/assets/images/profile.png')} className={styles.rewardImg} />
					<ProfileIcons img={require('@/assets/images/profile.png')} className={styles.rewardImg} />
				</ProfileIconsContainer>
				</View>

				<View style={styles.rewardMiniCardRow}>
				<RewardDate date={'SAT, 14 DEC'} />
				</View>
			</Column>
		) : (
			<>
			<View style={styles.rewardMiniCardRow}>
				<ProfileIconsContainer count={4}>
					<ProfileIcons img={require('@/assets/images/profile.png')} className={styles.rewardImg} />
					<ProfileIcons img={require('@/assets/images/profile.png')} className={styles.rewardImg} />
				</ProfileIconsContainer>
				</View>

				<View style={styles.rewardMiniCardRow}>
					<RewardDate date={'SAT, 14 DEC'} />
				</View>
			</>
		)}
	</View>
	</>
);

export default function TasksPage() {
  return (
    <Page
      title="Tasks"
      content={
        <>
          <View style={styles.container}>
            <ProfileRow img={require('@/assets/images/profile.png')} name={'Randolf Wesely'} />
		
			<Row>
				<View style={styles.taskHeader}>
					<Text style={styles.cardHeaderTextWhite}>Tasks Overview</Text>
					<Text style={styles.cardSubTextWhite}>5 Tasks Pending</Text>
				</View>

				<View style={styles.addButton}>
					<TextLink type={'button'} className={styles.linkButton} icon={<Ionicons name="add-outline" size={28} color={'#fff'}/>} url={'/tasks/create'} />
				</View>
			</Row>

			<Row>
				<RewardMiniCard>
					<MiniCardInfo/>
				</RewardMiniCard>
			</Row>

			<Row>
				<RewardMiniCard>
					<MiniCardInfo/>
				</RewardMiniCard>
			</Row>
             
          </View>
          
        </>
      }
    />
  );
}
