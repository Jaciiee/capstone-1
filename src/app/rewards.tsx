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

const MiniCardInfo = ({split} : {split?:boolean, chart?:boolean}) => (
	<>
	{!split && (
      <View style={styles.rewardMiniCardRow}>
        <Text style={styles.rewardTag}>Get 500 Points</Text>
      </View>
    )}
	
	
	
	<View style={styles.rewardMiniCardRow}>
		<Text style={styles.headerText}>Trip to Sentosa!</Text>
		<Text style={styles.miniCardSubText}>A family trip to sentosa over the weekends!</Text>
	</View> 
	<View style={styles.rewardMiniCardRow}>
		<Tags className={styles.purpleTag} text={ 'Experiences'} marginClass={styles.addRightMargin}/>
		<Tags className={styles.greenTag} text={ '$1500'} marginClass={styles.addRightMargin}/>
	</View>
	</>
);

export default function RewardsPage() {
  return (
    <Page
      title="Rewards"
      content={
        <>
          <View style={styles.container}>
            <ProfileRow img={require('@/assets/images/profile.png')} name={'Randolf Wesely'} />
            <RewardsRow savertype={'Gold Saver'} rewardsAmt={'2 Rewards'}/>

            <RewardCard>
                <Text style={styles.cardHeaderText}>Rewards Shop</Text>
                <Row>
					<RewardMiniCard small>
						<MiniCardInfo split/>
					</RewardMiniCard>

					<RewardMiniCard small>
						<MiniCardInfo split/>
					</RewardMiniCard>
                </Row>
				
				<TextLink title={'View All Rewards'} icon={<Ionicons name="chevron-forward-outline" size={20}/>} url={'https://www.google.com'} />
            </RewardCard>
          </View>
        </>
      }
    />
  );
}
