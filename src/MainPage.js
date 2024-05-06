import Header from './header'; // Importa el componente Header
import NavigationMenu2 from './navigationMenu2'; // Importa el componente NavigationMenu
import BarraLateral3 from './barraLateral3'; // Importa el componente BarraLateral

const MainPage = () => {

    return (
        <div>
            <Header color="#008000" />
            <NavigationMenu2
                backgroundColor="#004d00"
                borderColor="#002600"
                buttonColor="#008000"
                buttons={[
                    { label: 'Panel Principal' },
                    { label: 'Otros Permisos' },
                    { label: 'Enlaces Rápidos' },
                ]}
            />
            <BarraLateral3
                    backgroundColor="#004d00"
                    borderColor="#002600"
                    buttonColor="#008000"
                />

          
        </div>
    );
};

export default MainPage;
