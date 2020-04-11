type ActionOption = {
    add?: String,
    remove?: String,
    toggle?: String
};
type NodeListLike = NodeList | Node[] | Node | EventTarget;
type OptionList = String | String[];

export declare function addClass(itmList: NodeListLike, optList: OptionList) : void;

export declare function removeClass(itmList: NodeListLike, optList: OptionList) : void;

export declare function toggleClass(itmList: NodeListLike, optList: OptionList) : void;

export declare function execClass(itmList: NodeListLike, optList: ActionOption | ActionOption[]) : void;
