// // ProfileScreen.js
// import React, { useContext } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { AuthContext } from '../../Context/AuthContext';

// const ProfileScreen = () => {
//   const { user } = useContext(AuthContext);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Name: {user.name}</Text>
//       <Text style={styles.text}>Email: {user.email}</Text>
//       {/* Display other user information as needed */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 18,
//     marginBottom: 10,
//   },
// });

// export default ProfileScreen;

// ProfileScreen.js
// import React, { useContext } from "react";
// import { View, Text, Button, StyleSheet } from "react-native";
// import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook

// const ProfileScreen = ({ route }) => {
//   // const user = route.params ? route.params.user : null;

//   // console.log(user);

//   const navigation = useNavigation(); // Get navigation from hook

//   const handleLogout = () => {
//     // Implement your logout logic
//     logout();
//     // For demonstration, navigate to the login screen after logout
//     navigation.navigate("Login");
//   };

//   return (
//     <View style={styles.container}>
//       {/* <Text style={styles.text}>Name: {user.name}</Text>
//       <Text style={styles.text}>Email: {user.email}</Text>
//       <Button title="Logout" onPress={handleLogout} /> */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   text: {
//     fontSize: 18,
//     marginBottom: 10,
//   },
// });

// export default ProfileScreen;






import React, { useContext } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
// import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook
import { useNavigation, useRoute } from "@react-navigation/native";

const ProfileScreen = () => {

  const navigation = useNavigation(); 
  const route = useRoute(); // Get the route object

  const user = route.params?.user || {};

  const handleLogout = () => {
  
    logout();
   
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Name: {user.username}</Text>
      <Text style={styles.text}>Email: {user.email}</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default ProfileScreen;
