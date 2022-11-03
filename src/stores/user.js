import { defineStore } from "pinia";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    AuthCredential,
    getAuth,
    sendPasswordResetEmail,
    deleteUser
} from "firebase/auth";
import { auth } from "../firebase";
import router from "../router";
import { directus } from "../../src/services/directus.js";



export const useUserStore = defineStore("userStore", {

    state: () => ({
            userData: null,
            loadingUser: false,
            loadingSession: false,
            userAuthCake: {},
            logoutState: false,
            closeUser: false,
            loadingBig: false,
            loadingMidle: false,
            reset: false,
            aten: false,
            resetPassword: "",
            send: false,
            incorrect: {
                user: false,
                password: false
            },
            fail: false,
            conexion: false,
            open: false,
            perfil: false,
            result: false,
            register: false,
            error: false,
            proveedores: [],
            categories: [],
            array: [],
            proveedorebyCat: [],
            result: [],
            categobyid: []






        }

    ),
    persist: {
        paths: ['userAuthCake', 'proveedores', 'result', 'categories'],
    },

    actions: {

        async deleteUser(user) {

            deleteUser(user).then(() => {
                // User deleted.
            }).catch((error) => {
                console.log(error)
            });




        },

        async registerUser(email, password) {

            try {

                const auth = getAuth();
                createUserWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {

                        const user = userCredential.user;
                        console.log(user)
                        console.log(userCredential)
                        this.register = false



                    })
                    .catch((error) => {

                        const errorCode = error.code;
                        const errorMessage = error.message;
                        console.log(error.code)
                        if (errorCode === 'auth/email-already-in-use')
                            this.error = true
                        else
                            this.conexion = true



                    });




            } catch (error) {
                console.log(error);


            } finally {



            }






        },

        async loginUser(email, password) {

            try {


                // LOGIN en Firebase
                const user = await signInWithEmailAndPassword(
                    auth,
                    email,
                    password

                );
                this.userData = { email: user.email, uid: user.uid };

                console.log(user)
                console.log('exito')
                this.open = false
                this.loadingSession = true

            } catch (error) {
                console.log(error);
                const errorCode = error.code;
                const errorMessage = error.message;
                this.loadingSession = false

                console.log(errorCode)
                console.log(errorMessage)

                if (errorCode === 'auth/wrong-password')
                    this.fail = true
                else
                    this.conexion = true
            } finally {


            }
        },



        async getProv() {
            //se obtienen todos los proveedores
            const prov = directus.items('Proveedores');
            console.log('buscando proveedores')


            try {
                this.proveedores = await prov.readByQuery({})

                console.log(this.proveedores)


            } catch (error) {
                console.log(error);
            } finally {

            }
        },

        async getCatbyid(id) {
            this.loadingBig = true
            this.result = []
                //se obtienen los id de los prveedores asociados a dicha categoria
            const cat = directus.items('Proveedores_Categorias');
            console.log('buscando Categorias')


            try {
                this.categobyid = await cat.readByQuery(

                    {
                        fields: ['Proveedores_id'],

                        filter: {

                            Categorias_id: {
                                _eq: id
                            },
                        }
                    }, )

                console.log(this.categobyid.data)

                let i = 0
                this.categobyid.data.forEach(dato => {

                    console.log(dato.Proveedores_id)
                    let resp = this.proveedores.data.find(element => element.id === dato.Proveedores_id);
                    console.log(resp)
                    if (resp != undefined) {
                        this.result[i] = resp
                        console.log(this.result[i])
                        i = i + 1

                    }

                    resp = undefined



                });
                this.loadingBig = false
                router.push("/home")


            } catch (error) {
                console.log(error);
            } finally {

            }
        },

        async getCat() {
            const cate = directus.items('Categorias');
            console.log('buscando Categorias')


            try {
                this.categories = await cate.readByQuery(

                    {}, )

                console.log(this.categories.data)


            } catch (error) {
                console.log(error);
            } finally {

            }
        },
        async getProveebyQuery(query) {
            this.loadingBig = true
            const provee = directus.items('Proveedores');
            console.log('buscando Categorias')
            this.result = []
            console.log(query)

            try {
                let result = await provee.readByQuery(

                    {
                        filter: {

                            Nombre: {
                                _contains: query
                            },
                        }


                    }, )
                this.result = result.data

                console.log(this.result)
                this.loadingBig = false

                router.push("/home")


            } catch (error) {
                console.log(error);
            } finally {

            }
        },

        logout() {


            signOut(auth)
                .then(() => {
                    this.loadingSession = false
                }).catch((error) => {
                    console.log(error)
                });
        },

        currentUser() {
            return new Promise((resolve, reject) => {
                const unsuscribe = onAuthStateChanged(
                    auth,
                    (user) => {
                        if (user) {
                            this.userData = {
                                email: user.email,
                                uid: user.uid,
                            };
                        } else {
                            this.userData = null;
                        }
                        resolve(user);
                    },
                    (e) => reject(e)
                );
                unsuscribe();
            });
        },







    },

});