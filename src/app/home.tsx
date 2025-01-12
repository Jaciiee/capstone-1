import React from 'react';
import { Page } from '@/screens/Page';
import { View, Text, ActivityIndicator } from 'react-native';

import styles from '@/constants/styles';
import { Card } from '@/components/Cards';
import { Column, Row } from '@/components/Row';
import { Graph } from '@/components/Graph';
import { Tags } from '@/components/Tags';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ProfileRow } from '@/components/Profile';
import { TextLink } from '@/components/Link';
import { RewardCard, RewardMiniCard, RewardsRow, RewardDate } from '@/components/RewardCardItem';

const KidsSummary = () => (
  <View style={styles.container}>

    <Text style={styles.smallHeader}>
      2024 DECEMBER 
      <Tags className={styles.blueTag} text={ 'Default'} marginClass={styles.addMargin}/>
    </Text>
    <Text style={styles.headerText}>Mary's Summary</Text>
    <View style={styles.lineStyle} />
    <Graph type="pie" />

    <View style={styles.lineStyle} />
    <Text style={styles.headerText}>Weekly Summary</Text>
    <Graph type="bar" />
    
    <View style={styles.lineStyle} />

    <Row>
        <Column>
            <Text style={styles.smallHeader}>SPENT</Text>
            <Text style={styles.headerText}>$ 1,250</Text>
        </Column>

        <View style={styles.verticalLine} />

        <Column>
            <Text style={styles.smallHeader}>EARNED</Text>
            <Text style={styles.headerText}>$ 54.50</Text>
        </Column>
    </Row>

    <View style={styles.lineStyle} />
    
    <TextLink title={'See all transactions'} icon={<Ionicons name="chevron-forward-outline" size={20}/>} url={'https://www.google.com'} />
  </View>
);

export default function HomePage() {
  return (
    <Page
      title="Home"
      content={
        <>
          <View style={styles.container}>
            <ProfileRow img={require('@/assets/images/profile.png')} name={'Randolf Wesely'} />
            <RewardsRow savertype={'Gold Saver'} rewardsAmt={'2 Rewards'}/>

            <Row>
              <Card
                title={
                  <Row>
                    <Ionicons style={styles.cardIcon} name="library-outline" size={18} color="#9251DB" />
                    credit score
                  </Row>
                }
                description="850"
                subText="Excellent"
                style={styles.cardLeft}
              />
              <Card
                title={
                  <Row>
                    <Ionicons style={styles.cardIcon} name="card-outline" size={18} color="white" />
                    Wallet
                  </Row>
                }
                description="$1,252"
                style={styles.cardRight}
              />
            </Row>

            <Row>
                <Card title={null} description={ <KidsSummary />} subText="" style={styles.cardWhite} />
            </Row>
          </View>
          
        </>
      }
    />
  );
}
