import { FormEvent } from "react"
import { TotemService } from "../../services/totem/totemService";
import { useMutation } from "@tanstack/react-query";
import { useNotification } from "../../context/notificationContext";

export const EnfermagemModel = (totemService: TotemService) => {

    const notification = useNotification()

    const { ...propsMutationTotem } = useMutation({
        mutationFn: async (event: FormEvent<HTMLFormElement>) => {
            event.preventDefault()
            const form = event.target as HTMLFormElement;
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            return await totemService.checkin({
                cpf: data.cpf as string
            })
        }, onSuccess() {
            notification.openNotification({
                type: "error",
                message: "Error",
                description: "Sucesso!"
            })
        }, onError(err) {
            notification.openNotification({
                type: "error",
                message: "Error",
                description: err.message
            })
        }
    })

    return { propsMutationTotem }
}