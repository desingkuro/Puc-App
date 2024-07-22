import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import { Home } from "../Screens/Home";
import Counts from "../Screens/Counts";
import DetalleCuentaModal from "../Screens/DetalleCuentaModal";

const Stack = createStackNavigator();

export function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="home" size={size} color={color} />;
          },
          tabBarLabelStyle: {
            display: "none",
          },
          headerTitle: "Buscar",
          headerTitleStyle: {
            fontSize: 26,
            color: "#2499c7",
          },
        }}
      />
      <Stack.Screen name="Counts" component={Counts} />
      <Stack.Screen name="Detalles" component={DetalleCuentaModal} />
    </Stack.Navigator>
  );
}
