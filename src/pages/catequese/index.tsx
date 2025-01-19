import React, { useRef } from "react";
import { Text, TextInput, View } from 'react-native';
import { Input } from "../../components/Input";
import { styles } from "./styles"; 
import { useForm } from "react-hook-form";
import { Button } from "../../components/Button";

export default function Catequese() {
    const { control, handleSubmit, formState: { errors } } = useForm();
    const emailRef = useRef<TextInput>(null);
    const addressRef = useRef<TextInput>(null);
    const phoneRef = useRef<TextInput>(null);

    function enviarForm(data: any) {
        console.log(data);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title1}>SE INSCREVA NA</Text>
            <Text style={styles.title2}>CATEQUESE</Text>

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
                    onSubmitEditing: () => emailRef.current?.focus(),
                    returnKeyType: "next"
                }}
            />

            <Input
                error={errors.email?.message}
                icon="mail"
                formProps={{
                    name: "email",
                    control: control,
                    rules: {
                        required: "E-mail é obrigatório.",
                        pattern: {
                            value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                            message: "E-mail inválido."
                        }
                    }
                }}
                inputProps={{
                    placeholder: "E-mail",
                    ref: emailRef,
                    onSubmitEditing: () => addressRef.current?.focus(),
                    returnKeyType: "next"
                }}
            />

            <Input
                error={errors.address?.message}
                icon="map-pin"
                formProps={{
                    name: "address",
                    control: control,
                    rules: {
                        required: "Endereço é obrigatório."
                    }
                }}
                inputProps={{
                    placeholder: "Endereço",
                    ref: addressRef,
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
                            value: /^\d{2}9\d{8}$/,
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
    );
}