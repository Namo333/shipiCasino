import { Link, Outlet } from "react-router-dom";
import { Input, Button, Checkbox, Typography } from "@material-tailwind/react";

const RegistrationMenu = () => {
    return(
        <section className="w-[490px]">
        <div className="text-center mb-[27px]">
            <h1 className="font-bold text-[27px]">Регистрация!</h1>
            <p className="text-[15px]">Готовы стать частью эксклюзивного клуба? Заполните данные ниже, и пусть путешествие начнется!</p>
        </div>
        <div className="flex flex-col gap-[26px]">  
            <div className="flex flex-col gap-[10px]">
                <Input color="white" type="email" label="Почта" />
                <Input color="white" label="Имя пользователя" />
                <Input color="white" type="password" label="Пароль" />
                <Input color="white" type="password" label="Подтвердите пароль" />
            </div>
            <Button fullWidth color="blue">Зарегистрироваться</Button>    
        </div>
        <div className="flex justify-between mt-[15px]">
            <Link to='/login' className="text-[15px]">Уже есть учетная запись? <span className="font-bold">Авторизироваться</span></Link>
        </div>
        <Outlet/>
    </section>
    )
};
  
export default RegistrationMenu;