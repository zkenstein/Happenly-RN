import React from 'react';
import { ImageBackground, Image, Text, View, TouchableOpacity, TouchableHighlight, Alert, KeyboardAvoidingView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import appStyles from '../../../styles/app-style';
import styles from './style';

class SiginInScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  // === === //
    render() {
        return (
          <ImageBackground source={require('../../../../assets/images/bg-auth.png')} style={appStyles.container}>
            <View style={appStyles.col_container}>
              <Image source={require('../../../../assets/images/logo-white.png')} style={styles.logo}></Image>
            </View>
            <View style={appStyles.col_container}>
              <KeyboardAvoidingView 
                behavior="padding" 
                enabled
              >
                <View style={appStyles.col_container}>
                  <View style={[styles.inline_group, appStyles.borderBottom]}>
                    <Text style={[appStyles.white, appStyles.font_md, {width:55}]}>EMAIL: </Text>
                    <TextInput style={[appStyles.white, appStyles.font_md, {width: 215}]} 
                      maxLength={40} 
                      autoCompleteType='email' 
                    ></TextInput>
                  </View>
                </View>
                <View style={appStyles.col_container}>
                  <View style={[styles.inline_group, appStyles.borderBottom]}>
                    <Text style={[appStyles.white, appStyles.font_md, {width:95}]}>PASSWORD: </Text>
                    <TextInput style={[appStyles.white, appStyles.font_md, {width: 175}]} 
                      maxLength={40} 
                      autoCompleteType='password' 
                      secureTextEntry={true} 
                    ></TextInput>
                  </View>
                </View>
                <View style={appStyles.col_container}>
                  <TouchableOpacity 
                    onPress={() => this.signIn()} 
                    style={styles.button}
                  >
                    <Text style={[appStyles.primary, appStyles.font_md]}>SIGN IN</Text>
                  </TouchableOpacity>
                </View>
              </KeyboardAvoidingView>
            </View>
            <View style={[appStyles.col_container, {justifyContent: 'flex-start'}]}>
              <View style={[styles.inline_group, styles.borderTop]}>
                <Text style={[appStyles.silver, appStyles.font_sm, {paddingTop: 2}]}>Don't have an account. only sign in once! </Text>
                <TouchableHighlight 
                  onPress={() => this.goSignUpScreen()}
                >
                  <Text style={appStyles.white}>SIGN UP</Text>
                </TouchableHighlight>
              </View>
            </View>
          </ImageBackground>
        );
    }

    // === === //
    signIn = () => {
      this.props.navigation.navigate('Main');
    }

    goSignUpScreen = () => {
      this.props.navigation.replace('SignUp');
    }
}

export default SiginInScreen;