import { Link, Outlet } from "react-router-dom";
import { Input, Button, Checkbox, Typography } from "@material-tailwind/react";

const LoginMenu = () => (
    <section className="w-[490px]">
        <div className="text-center mb-[27px]">
            <h1 className="font-bold text-[27px]">Добро Пожаловать в ShipiCasino!</h1>
            <p className="text-[15px]">Войдите в систему прямо сейчас и получите доступ к своей учетной записи.</p>
        </div>
        <div className="flex flex-col gap-[26px]">
            <div className="flex flex-col gap-[10px]">
                <Input color="white" label="Имя пользователя" />
                <Input color="white" type="password" label="Пароль" />
                <div className="flex justify-between items-center">
                    <Checkbox defaultChecked label={
                        <Typography className="text-white">
                            Запомнить меня
                        </Typography>
                    } color="blue"/>
                    <Link>Забыли пароль?</Link>
                </div>
            </div>
            <Button fullWidth color="blue">Авторизироваться</Button>    
        </div>
        <div className="flex justify-between mt-[15px]">
            <Link to='/registration' className="text-[15px]">У вас еще нет учетной записи? <span className="font-bold">Зарегистрируйтесь</span></Link>
        </div>
        <Outlet/>
    </section>
  );
  
export default LoginMenu;