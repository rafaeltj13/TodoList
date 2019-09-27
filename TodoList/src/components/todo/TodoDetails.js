import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet } from 'react-native';
import Dialog, { SlideAnimation, DialogFooter, DialogButton, DialogContent } from 'react-native-popup-dialog';
import { View, H3 } from "native-base";
import { setDetailTodo, showDialog } from '../../actions/todo-actions';

const TodoDetails = ({ openDialog, todo, detailTodo, closeDialog, ...props }) => {
    const {title, description, status} = todo;
    
    const handleClose = () => {
        detailTodo();
        closeDialog();
    }
    
    return (
        <View>
            <Dialog
                visible={openDialog}
                footer={
                    <DialogFooter>
                        <DialogButton
                            text="OK"
                            onPress={() => handleClose()}
                        />
                    </DialogFooter>
                }
            >
                <DialogContent>
                    <H3>{title}</H3>
                    <H3>Descrição: {description}</H3>
                    <H3>Status: {status}</H3>
                </DialogContent>
            </Dialog>
        </View>
    )
};

const styles = StyleSheet.create({
    input: {}
});

const mapDispatchToProps = dispatch => ({
    detailTodo: () => dispatch(setDetailTodo({})),
    closeDialog: () => dispatch(showDialog(false))
});

export default connect(null, mapDispatchToProps)(TodoDetails);