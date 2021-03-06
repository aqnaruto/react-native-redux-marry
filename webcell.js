import React, { Component, PropTypes } from 'react';
import ReactNative, {
  Navigator,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';


const kScreenWidth  = Dimensions.get('window').width;
const kScreenHeight = Dimensions.get('window').height;

const CellType = {
  Img_Text_4 : "Img_Text_4",
  Text_5 : "Text_5",
  Text_Blue_5 : "Text_Blue_5",
  Text_GrayBg_4 : "Text_GrayBg_4",
  Text_Blue_4 : "Text_Blue_4",
  Img_Text_5 : "Img_Text_5"
}

export default class WebView extends Component {
  static propTypes = {
    cellType: PropTypes.string,
    onPress: PropTypes.func,
    title: PropTypes.string,
    detailTitle: PropTypes.string,
    source: Image.propTypes.source,
  }

  static defaultProps = {
    cellType: CellType.Text_5,
  }

  _onPress = ()=> {
    console.log("_onPress");
    const {onPress} = this.props;
    if (onPress) {
      onPress();
    }
  }

  render() {
    let containerStyle = styles.container;
    let buttonStyle = styles.buttonStyle;
    let imageStyle = styles.imageLeftStyle;
    let titleStyle = styles.titleStyle;
    const { source, title } = this.props;
    switch (this.props.cellType) {
      case CellType.Img_Text_4:

        break;
      case CellType.Text_5:
        containerStyle = {width: kScreenWidth/5, height: 30, backgroundColor: '#e7e7e7',}
        break;
      case CellType.Text_Blue_5:
        containerStyle = {width: kScreenWidth/5, height: 30, backgroundColor: '#e7e7e7',}
        titleStyle = {flex: 1, fontSize: 12, textAlign: 'center', color: 'rgb(14, 140, 226)'}
        break;
      case CellType.Text_GrayBg_4:
        containerStyle = {padding: 3, width: kScreenWidth/4, height: 30, backgroundColor: 'white'}
        buttonStyle = {flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#e7e7e7'}
        break;
      case CellType.Text_Blue_4:

        break;
      case CellType.Img_Text_5:
        containerStyle = {width: kScreenWidth/5, height: 60, backgroundColor: 'white'}
        buttonStyle = {flex: 1, padding: 5, justifyContent: 'center', alignItems: 'center'}
        imageStyle = styles.imageTopStyle
        break;
      default:

    }

    return (
      <View style={containerStyle}>
        <TouchableOpacity
          // style={[buttonStyle, {underlayColor: 'rgb(14, 140, 226)'}]}
          style={buttonStyle}
          onPress={this._onPress}
          >
          {source && <Image source={source} style={imageStyle}/>}
          <Text style={titleStyle}>
            {title}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: kScreenWidth/4,
    height: 30,
    flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#e7e7e7',

    // padding: 5,
  },
  imageLeftStyle: {
    width: 20,
    height: 20,
    // paddingRight: 5,
    marginRight: 5,
  },
  imageTopStyle: {
    width: 30,
    height: 30,
    marginBottom: 5,
  },
  titleStyle: {
    flex: 1,
    fontSize: 12,
    textAlign: 'center',
    // backgroundColor: 'red',
  },
  titleBlueStyle: {},
  buttonStyle: {
    // padding: 5,
    // margin: 5,
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    // marginLeft: 5,
    // marginRight: 5,
    padding: 8,
  },
  buttonGrayBgStyle: {
    padding: 5,
    backgroundColor: 'gray',
  },
});
