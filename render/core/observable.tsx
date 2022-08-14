import React from "react";
import {BehaviorSubject} from 'rxjs';

class LcNode{
    private id: string;

    private parentId: string;

    private name: string;

    private observableList: Map<string, BehaviorSubject<any>>;

    constructor({id, parentId, name}: {id: string, parentId: string, name: string}) {
        this.id = id;
        this.parentId = parentId;
        this.name = name;
        this.observableList = new Map();
    }

    public node: any;

    public getId = () => this.id;

    public getParentId = () => this.parentId;

    public getName = () => this.name;

    public getObservableList = () => this.observableList;

    public isPropExist = (prop: string) => this.observableList.has(prop);

    public createObservable = (prop: string, initValue: any) => {
        if(!(this.observableList.has(prop))) {
            this.observableList.set(prop, new BehaviorSubject(initValue));
        }
        return this.observableList.get(prop);
    };

    public getObservable = (prop: string) => this.observableList.get(prop);

    public removeObservable = (prop: string) => {
        if(this.observableList.get(prop)) {
            this.observableList.delete(prop);
        }
    };
}

export default LcNode;