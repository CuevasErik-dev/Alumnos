
import { Card, PaperProvider } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import CardTitle from '../components/Card/CardTitle';


const Home = () => (
    <PaperProvider>
        <SafeAreaView>
            <CardTitle/>
        </SafeAreaView>
    </PaperProvider>    

);

export default Home;