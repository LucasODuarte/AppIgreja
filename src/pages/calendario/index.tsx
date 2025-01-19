import React from "react";
import { SafeAreaView, Text } from 'react-native';
import { Calendar,Agenda } from 'react-native-calendars';

import { styles } from './style';

export default function Calendario() {
    return (
        <SafeAreaView style={styles.container}>
            <Calendar 
            style={styles.calendar} 
            headerStyle={{ 
                borderBottomWidth: 0.5, 
                borderBottomColor: "#000000",
                paddingBottom: 10,
                marginBottom: 10,
            }} 
            theme={{
                textMonthFontSize: 20,
                textMonthFontWeight: 'bold',
                textWeekFontWeight: 'bold',
                textWeekColor: '#000000',
                todayTextColor: '#007AFF',
                selectedDayBackgroundColor: '#204AFF',
            }}
            />
            
        </SafeAreaView>
    )
}