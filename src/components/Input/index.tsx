import { TextInput, TextInputProps, View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { styles } from "./styles";
import { Controller, UseControllerProps } from "react-hook-form";
import { forwardRef } from "react";

type Props = {
    error: string;
    icon: keyof typeof Feather.glyphMap;
    formProps: UseControllerProps;
    inputProps: TextInputProps;
}

const Input = forwardRef<TextInput, Props> (({icon, formProps, inputProps, error=""}, ref) => {
    return(
        <Controller
            render = {({field}) => (
                <View style={styles.container}>
                    <View style={styles.group}>
                        <View style={styles.icon}>
                        <Feather name={icon} size={24} color="#007AFF"/>
                        </View>
                        <TextInput ref = {ref} value={field.value} onChangeText={field.onChange} style={styles.control} {...inputProps} />
                    </View>

                    {error.length > 0 &&
                    <Text style={styles.error}>
                        {error}
                    </Text>}
                </View>
            )}
            {...formProps}
        />
    );
});

export { Input };