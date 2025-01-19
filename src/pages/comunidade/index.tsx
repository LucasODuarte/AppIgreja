import React, { useRef } from "react";
import { Text, TextInput, View } from 'react-native';
import { Input } from "../../components/Input";
import { styles } from "./styles"
import { useForm } from "react-hook-form";
import { Button } from "../../components/Button";

export default function Comunidade (){
    const { control, handleSubmit, formState: { errors } } = useForm();
    const phoneRef = useRef<TextInput>(null);

    function enviarForm(data: any){
        console.log(data);
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title1}>FAÇA PARTE DA</Text>
            <Text style={styles.title2}>COMUNIDADE</Text>

            <Input
            error={errors.name?.message}
            icon="user" 
            formProps={{
                name: "name",
                control: control,
                rules: {
                    required: "Nome é obrigatório."
                }
            }}
            inputProps={{
                placeholder: "Nome",
                onSubmitEditing: () => phoneRef.current?.focus(),
                returnKeyType: "next"
            }}
            />

            <Input
            error={errors.phone?.message}
            ref={phoneRef}
            icon="phone" 
            formProps={{
                name: "phone",
                control: control,
                rules: {
                    required: "Telefone é obrigatório.",
                    pattern: {
                        value: /^\d{2}9\d{8}$/, //VERIFICAR ESSE REGEX
                        message: "Telefone inválido."
                    }
                }
            }}
            inputProps={{
                placeholder: "Telefone"
            }}
            />

            <Button title="Enviar" onPress={handleSubmit(enviarForm)} />
        </View>
    )
}