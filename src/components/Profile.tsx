import React from 'react';
import { View, Image, Text } from 'react-native';

import { Row } from './Row';
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from '@/constants/styles';

export const ProfileRow =  ({ img, name}: { img:string; name:string;}) => {
    return (    
        <Row>
            <View style={styles.LeftAlign}>
                <ProfileIcons img={img}/>
                <Text style={styles.headerTextWhite}>
                    Hi,  
                    <Text style={styles.profileName}> {name}</Text>
                </Text>
            </View>

            <Ionicons style={styles.cardIcon} name="notifications" size={25} color="white" />

        </Row>
    );
};

export const ProfileIconsContainer = ({ children, count }: { children?: any, count?: number }) => {
    let content;
  
    // If count is greater than 2, show a counter
    if (count && count > 2) {
      let newCount = count - 2;
      content = (
        <>
          {React.Children.map(children, (child, index) => {
            // Stack images with a slight offset of 40px for each additional image
            const positionStyle = {
              position: 'absolute',
              zIndex: index, // Ensure images overlap in order
              left: index * 40, // Slight vertical offset for each image
            };
  
            return (
              <View style={styles.ProfileIconsContainer}>
                <View style={positionStyle}>
                    {child}
                    {/* Show counter after the first two images */}
                    {index === 1 && (
                    <Text style={[styles.rewardProfilecounter, positionStyle]}>{newCount}+</Text>
                    )}
                </View>
              </View>
            );
          })}
        </>
      );
    } else {
      content = children;
    }
  
    return (
      <View style={styles.ProfileIconsContainer}>
        {content}
      </View>
    );
  };
  

export const ProfileIcons = ({img, className} : {img?:any, className?:any, }) =>{
    return (
        <Image
            style={[styles.profileImg, className]}
            source={typeof img === 'string' ? { uri: img } : img} // Handle URI or local asset
        />
    );
};

export const ProfileListItem = ({ img, name, email}: { img?:any; name:string; email:string}) => {
   return(
      <View style={styles.profileList}>
        <Row>
            <Image
              style={[styles.profileImg]}
              source={typeof img === 'string' ? { uri: img } : img} // Handle URI or local asset
            />

            <View style={styles.profileWrap}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.email}>{email}</Text>
            </View>
        </Row>
      </View>
   ) 
};