import { SubmitHandler, useForm } from "react-hook-form";
import { LoginService } from "../../services/login/loginService";
import { Ilogin, schemaLogin } from "../../services/login/login.type";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNotification } from "../../context/notificationContext";
import { useNavigate } from "react-router";

export const useLoginModel = (loginService: LoginService) => {

    const notification = useNotification()
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<Ilogin>({
        resolver: zodResolver(schemaLogin)
    })

    const onSubmitLogin: SubmitHandler<Ilogin> = async (data) => {
        try {
            const response = await loginService.login(data)
            localStorage.setItem("token", response.access_token)
            notification.openNotification({
                type: "success",
                message: "Login Efetuado com sucesso!",
                showProgress: true
            })
            navigate("/")
        } catch (error) {
            notification.openNotification({
                type: "error",
                message: "Não Autorizado!"
            })
        }
    }

    return {
        register,
        handleSubmit,
        errors,
        onSubmitLogin
    }

}