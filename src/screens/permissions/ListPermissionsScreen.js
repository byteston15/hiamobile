import { ListItem } from '@react-native-material/core';
import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
    container: {
        alignContent: 'center'
    }
});

const ListPermissionsScreen = ({ route, navigation }) => {
    const { listaDePermisos } = route.params;

    permissionDetails = (id) => {
        navigation.navigate('PermissionsDetails', { id });
    }

    return (
        <View style={styles.container}>
        { listaDePermisos.map( 
            (permission, index) => ( 
            <ListItem
                title={`Permiso - ${permission.fecha} - ${permission.estado} - ${permission.tipo}`}
                key={index}
                leading={<Icon name="inbox" size={24} />}
                trailing={props => <Icon name="arrow-right" {...props} />}
                onPress={()=>permissionDetails(permission.id)}
            />
            )
        )}
        </View>
    )
}

export default ListPermissionsScreen