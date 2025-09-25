
import React from 'react';
import { Snackbar } from 'react-native-paper';

const SnackbarAlert = ({ 
    visible, 
    message, 
    onDismiss, 
    duration = 3000,
    actionLabel = 'OK',
    type = 'default' // 'default', 'success', 'error', 'warning'
}) => {
    // Colores según el tipo
    const getBackgroundColor = () => {
        switch (type) {
            case 'success':
                return '#4CAF50';
            case 'error':
                return '#F44336';
            case 'warning':
                return '#FF9800';
            default:
                return '#333333';
        }
    };

    return (
        <Snackbar
            visible={visible}
            onDismiss={onDismiss}
            duration={duration}
            style={{ 
                backgroundColor: getBackgroundColor(),
                borderRadius: 8,
                margin: 10
            }}
            action={{
                label: actionLabel,
                onPress: onDismiss,
                labelStyle: { 
                    color: '#FFFFFF', 
                    fontWeight: 'bold' 
                }
            }}
        >
            {message}
        </Snackbar>
    );
};

export default SnackbarAlert;