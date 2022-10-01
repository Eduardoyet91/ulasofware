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
            error: false



        }

    ),
    persist: {
        paths: ['userAuthCake'],
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



        async getProfile() {



            // router.push("/profile");            

            try {



                let myHeaders = new Headers();
                myHeaders.append("Authorization", "Bearer " + valor);
                myHeaders.append("Cookie", "PHPSESSID=boh7ejg10hajd7g4e94f6r3cpo; csrfToken=fOK%2BNaerF5hObyziagqDq2YxNjg2OTIxODNmZDE2ODYwYmFhMmVhMzk1MTU4NGVkNDFhYzMyZGY%3D");




                let raw = {}

                var requestOptions = {

                    method: "POST",
                    body: JSON.stringify(raw),
                    headers: myHeaders,

                };



                await fetch("https://wsmainbackend.ponce.cloud/api/user/getProfile", requestOptions)
                    .then(response => response.json())
                    .then(json => {

                        console.log(json),

                            console.log(json.data),
                            this.userAuthCake = json.data
                        console.log(this.userAuthCake)

                    })

                .catch(err => console.log(err));






            } catch (error) {
                console.log(error);
            } finally {
                this.loadingUser = false;
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