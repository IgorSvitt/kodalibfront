import {createStore} from "vuex";
import {activeMethod} from "@/Store/AdminPanelStore/activeMethodModul";
import {films} from "@/Store/Films/filmModule";
import {getMethod} from "@/Store/AdminPanelStore/Methods/Get/getMethod";
import {updateMethod} from "@/Store/AdminPanelStore/Methods/Update/updateMethod";
import {people} from "@/Store/People/personModule"
import {getPerson} from "@/Store/AdminPanelStore/PersonMethod/Get/personGetModule";
import {updatePerson} from "@/Store/AdminPanelStore/PersonMethod/Update/personUpdateModule";

export default createStore({
    modules:{
        active: activeMethod,
        films: films,
        get: getMethod,
        update: updateMethod,
        people: people,
        getPersonMethod: getPerson,
        updatePersonMethod: updatePerson,
    }
})