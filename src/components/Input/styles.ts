import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        width: "100%",
    },
    group:{
        width: "100%",
        height: 56,
        backgroundColor: "#FFF",
        flexDirection: "row",
        alignItems: "center",
        overflow: "hidden",
        marginTop: 16,
    },
    icon: {
        height: 56,
        width: 56,
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        borderRightWidth: 3,
        borderRightColor: "#F4F5F6"
    },
    control:{
        flex: 1,
        paddingLeft: 16,
        fontSize: 16,
    },
    error:{
        fontSize: 12,
        color: "#DC1637"
    }
});