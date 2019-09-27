import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ScrollView, ActivityIndicator, View, Button } from 'react-native';
import * as action from '../actions/actions';
import Confession from '../components/confessionComponent';

class Conf extends React.Component {
    static navigationOptions = {
        title: 'Confessions',
    }
    componentWillMount = () => {
        if (this.props.confs.confs.length === 0) {
            this.props.getAllConfs(0, 'student');
        }
    }
    loadmore = () => {
        const confs = this.props.confs.confs;
        const lastconfId = confs[confs.length - 1]._id;
        this.props.getAllConfs(lastconfId);
    }
    addThisConf = (id, index) => {
        this.props.authThisConf(id, index);
    }
    render() {
        // let click = null;
        // if (this.props.user.role === 'admin') {
        //     click = this.addThisConf;
        // } 
        // console.log(this.props.confs.confs);
        const conf = this.props.confs.confs.map((text, index) => (
                <Confession data={text} key={index} />
            )
        );
        // const { navigate } = this.props.navigation;
        return (
            <ScrollView>
                <View style={{ padding: 15, paddingBottom: 0 }}>
                    <Button 
                        color='teal' 
                        title='WRITE YOUR CONFESSION' 
                        onPress={() => this.props.navigation.navigate('AddConf')}                                 
                    />
                </View>
                {/* <Button 
                    color='teal' 
                    title='LOAD MORE...' 
                    onPress={() => navigate(
                        'Profile', { name: 'shubham shinde' }
                    )}                                 
                /> */}
                {conf}
                {/* <Button 
                fluid 
                color="teal" 
                style={{marginBottom: '15px'}} 
                onClick={this.loadmore}>load more</Button> */}
                {
                    this.props.confs.isFetching 
                    ? <ActivityIndicator size="large" style={{ padding: 20 }} />
                    : <View style={{ padding: 15 }}>
                        <Button 
                            color='teal' 
                            title='LOAD MORE...' 
                            onPress={this.loadmore}                                 
                        />
                    </View>
                }
            </ScrollView>
        );
    }
}

const mapStateToProps = (state) => ({ confs: state.confs });

const matchDispatchToProps = (dispatch) => bindActionCreators(action, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(Conf);

