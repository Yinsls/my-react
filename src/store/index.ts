import { createStore, combineReducers } from "redux";
import { testReducer, showList, countReducer } from "./reducer/test";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import { userReducer } from './persist/persistReducer'

const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: autoMergeLevel2, // 查看 'Merge Process' 部分的具体情况
};
const persistData = persistReducer(persistConfig, userReducer);
const mergeReducer = combineReducers({ testReducer, countReducer, showList, persistData });

const store = createStore(mergeReducer);
export const persistor = persistStore(store);
export default store;
