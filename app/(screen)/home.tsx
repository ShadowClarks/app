import React from 'react';
import { Image, StyleSheet, View, Text, FlatList,TouchableOpacity } from 'react-native';
import { items } from '../interface/shoedetail';

export default function HomeScreen() {
  let data: items[] = [
    {
      name: 'Nike Jordan',
      price: '₹2,193.00',
      image: require('../../assets/images/shoebg.jpeg'),
      discount: '₹493.00',
      id: 1,
    },
    {
      name: 'Adidas Runner',
      price: '₹3,500.00',
      image: require('../../assets/images/shoess.jpeg'),
      discount: '₹1,999.00',
      id: 2,
    },
    {
      name: 'Puma Blaze',
      price: '₹2,800.00',
      image: require('../../assets/images/shoebg.jpeg'),
      discount: '₹1,299.00',
      id: 3,
    },
    {
      name: 'Reebok Flex',
      price: '₹4,000.00',
      image: require('../../assets/images/shoees.jpeg'),
      discount: '₹1,899.00',
      id: 4,
    },
    {
      name: 'Reebok Flex',
      price: '₹5,000.00',
      image: require('../../assets/images/shoees.jpeg'),
      discount: '₹2,899.00',
      id: 5,
    },
    {
      name: 'Reebok Flex',
      price: '₹4,000.00',
      image: require('../../assets/images/shoees.jpeg'),
      discount: '₹1,899.00',
      id: 6,
    },
    {
      name: 'Reebok Flex',
      price: '₹4,000.00',
      image: require('../../assets/images/shoees.jpeg'),
      discount: '₹1,899.00',
      id: 7,
    },
    {
      name: 'Reebok Flex',
      price: '₹4,000.00',
      image: require('../../assets/images/shoees.jpeg'),
      discount: '₹1,899.00',
      id: 8,
    },
    {
      name: 'Reebok Flex',
      price: '₹4,000.00',
      image: require('../../assets/images/shoees.jpeg'),
      discount: '₹1,899.00',
      id: 9,
    },
    {
      name: 'Reebok Flex',
      price: '₹4,000.00',
      image: require('../../assets/images/shoees.jpeg'),
      discount: '₹1,899.00',
      id: 10,
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.shoeImage} />
      <View style={styles.textContainer}>
        <Text style={styles.shoeName}>{item.name}</Text>
        <Text style={styles.originalPrice}>{item.price}</Text>
        <Text style={styles.discountedPrice}>{item.discount}</Text>
      </View>
      <TouchableOpacity
      style={styles.addButton}>
      <Image
        source={require('../../assets/images/plus1.png')}
        style={styles.addIcon}
      />
    </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Shoe Store</Text>
      <View style={styles.divider} />
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        numColumns={2}
        contentContainerStyle={styles.flatListContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DFD5CD',
    paddingTop: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 40,
  },
  divider: {
    height: 2,
    backgroundColor: 'black',
    marginHorizontal: 20,
    marginTop: 15,
    marginBottom: 20,
  },
  flatListContainer: {
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5,
    margin: 10,
    width: 150,
    overflow: 'hidden',
    alignItems: 'center',
    paddingBottom: 10,
  },
  shoeImage: {
    width: 100,
    height: 120,
    resizeMode: 'contain',
  },
  textContainer: {
    marginTop: 10,

  },
  shoeName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  originalPrice: {
    fontSize: 14,
    color: 'red',
    textDecorationLine: 'line-through',
  },
  discountedPrice: {
    fontSize: 18,
    color: 'green',
    fontWeight: 'bold',
  },
  addButton: {
    position: 'absolute',
    bottom: 1,
    right: 0,
    // backgroundColor: '#E8E8E8',
    borderRadius:25,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addIcon: {
    width: 20,
    height: 20,
  },
});






























// // map items vala code

// import { Image, StyleSheet, View, Text, ScrollView, FlatList, TouchableOpacity } from 'react-native';
// import { items } from '../interface/shoedetail';

// export default function HomeScreen() {






//   let data: items[] = [
//     {
//       name: 'Nike Jorden',
//       price: '₹2,193.00',
//       image: require('../../assets/images/shoebg.jpeg'),
//       discount: '₹493.00',
//       id: 1,
//     },
//     {
//       name: 'Adidas Runner',
//       price: '₹3,500.00',
//       image: require('../../assets/images/shoess.jpeg'),
//       discount: '₹1,999.00',
//       id: 2,
//     },
//     {
//       name: 'Puma Blaze',
//       price: '₹2,800.00',
//       image: require('../../assets/images/shoebg.jpeg'),
//       discount: '₹1,299.00',
//       id: 3,
//     },
//     {
//       name: 'Reebok Flex',
//       price: '₹4,000.00',
//       image: require('../../assets/images/shoees.jpeg'),
//       discount: '₹1,899.00',
//       id: 4,
//     },
//     {
//       name: 'Air Jordan',
//       price: '50000',
//       image: require('../../assets/images/shoees.jpeg'),
//       discount: '30000',
//       id: 5,
//     }
//   ];

//   return (
//     <View style={styles.container}>
//       <View style={styles.titleContainer}>
//         <Text style={styles.textt}>Shoe Store</Text>
//       </View>
//       <View style={styles.divider} />

//       <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
//         <View style={{ flex: 1, alignItems: 'center' }}>
//           {data.map((item) => (
//             <View key={item.id} style={styles.stepContainer1}>
//               <View style={styles.shoeimage}>
//                 <Image source={item.image} style={{ height: '55%', width: '75%' }} />
//               </View>
//               <View style={styles.texts}>
//                 <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{item.name}</Text>
//                 <Text style={{ fontSize: 32 }}>{item.name}</Text>
//                 <Text style={{ fontSize: 22, color: 'red', textDecorationLine: 'line-through' }}>
//                   {item.price}
//                 </Text>
//                 <Text style={{ fontSize: 30, color: 'green' }}>{item.discount}</Text>
//               </View>
//               <TouchableOpacity>
//                 <View style={styles.subimage}>
//                   <Text style={{ fontSize: 30, }}>+</Text>
//                 </View>
//               </TouchableOpacity>
//             </View>
//           ))}
//         </View>
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#DFD5CD',
//     alignItems: 'center',
//     overflow: 'hidden',

//   },
//   titleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   textt: {
//     marginTop: '15%',
//     color: 'black',
//     fontSize: 24,
//     // marginLeft: '35%',
//     fontStyle: 'italic',
//     fontWeight: 'bold',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   divider: {
//     height: 2,
//     width: '100%',
//     backgroundColor: 'black',
//     marginTop: '5%',
//   },
//   // scrollcont: {
//   //   flex: 1,
//   //   width: '100%',
//   // },
//   stepContainer1: {
//     gap: 8,
//     marginBottom: 20,
//     backgroundColor: 'white',
//     marginTop: '10%',
//     width: 250,
//     height: 300,
//     // marginLeft: '15%'
//     borderRadius: 10,
//     elevation: 10,
//     overflow: 'hidden',
//   },
//   subimage: {
//     height: 50,
//     width: 50,
//     backgroundColor: '#DFD5CD',
//     // position: 'absolute',
//     left: 200,
//     bottom:15,
//     borderTopLeftRadius: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   shoeimage: {
//     backgroundColor: 'white',
//     height: 150,
//     width: 250,
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 10,
//   },
//   texts: {
//     height: 50,
//     marginLeft: 10,
//     marginBottom: 50,
//   },
// });