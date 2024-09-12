import { Input, Button, Checkbox, Typography } from "@material-tailwind/react";

const ForgotPasswordMenu = () => (
    <section className="w-[490px]">
        <div className="text-center mb-[27px]">
            <h1 className="font-bold text-[27px]">Сбросить пароль</h1>
            <p className="text-[15px]">Введите свой авторизованный адрес электронной почты, чтобы получить ссылку для сброса пароля.</p>
        </div>
        <div className="flex flex-col gap-[26px]">
            <div className="flex flex-col gap-[10px]">
                <Input color="white" label="Почта" />
            </div>
            <Button fullWidth color="blue">Отправить ссылку для сброса пароля</Button>    
        </div>
    </section>
  );
  
export default ForgotPasswordMenu;