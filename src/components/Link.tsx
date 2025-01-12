import React from 'react';
import { View, Text, TouchableOpacity, Linking} from 'react-native';

import { Row } from './Row';
import { useRouter } from 'expo-router';

import Ionicons from '@expo/vector-icons/Ionicons';
import styles from '@/constants/styles';

export const TextLink =  ({ title, url, icon, type, page, className}: {title?:any; url?:any; icon?:any; type?:any, page?:boolean; className?:any}) => {
    const router = useRouter();
    const handlePress = () => {
        if (url) {
            Linking.openURL(url).catch(err => console.error("Failed to open URL:", err));
        }
    };

    const navigateToPage = () => {
        router.push(url)
        handlePress(); // If you have any custom logic to handle on press
    };

    return (   
        <View style={styles.LinkContainer}>
            {type === 'button' && url ? (
                <TouchableOpacity onPress={page ? navigateToPage : handlePress}>
                    <View style={className}>
                        {title}
                        {icon}
                    </View> 
                </TouchableOpacity>
            ) : url ? (

                <TouchableOpacity onPress={handlePress}>
                    <Text style={styles.linkText}>
                        {title}
                        {icon && <Text style={styles.linkIcon}>{icon}</Text>}
                    </Text>
                </TouchableOpacity>
            ) : null}
        </View>

    );
};