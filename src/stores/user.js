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
            loadingSearch: false,
            loadingSaved: false,
            loadingPublici: false,
            loadingDelete: false,
            loadingSession: false,
            loadingBig: false,
            fail: false,
            conexion: false,
            open: false,
            register: false,
            error: false,
            proveedores: [],
            categories: [],
            array: [],
            proveedorebyCat: [],
            result: [],
            categobyid: [],
            getP: false,
            getC: false,
            dato: "",
            addcat: false,
            proveedor: [],
            publicidad: [],
            logo: "",
            banner: "",
            addpubl: false,
            image: "",
            editar: true,
            change: false,
            ofer: false,
            ready: false,
            checkedNames: [],
            locales: [],
            local: "",
            ofertas: [],
            disponibles: [],
            agregar: false,
            actual: false,
            saved: true



        }

    ),
    persist: {
        paths: ['proveedores', 'checkedNames', 'banner', 'agregar', 'result', 'categories', 'proveedor', 'locales', 'local', 'publicidad', 'logo', 'ofertas', 'disponibles'],
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
            this.loadingUser = true

            try {


                // LOGIN en Firebase
                const user = await signInWithEmailAndPassword(
                    auth,
                    email,
                    password

                );
                this.userData = { email: user.email, uid: user.uid };


                this.open = false
                this.loadingSession = true
                this.result = []
                this.loadingUser = false
                router.push("/soporte")


            } catch (error) {
                console.log(error);
                this.loadingUser = false
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

        async createCat(name, descripcion) {

            //se obtienen todos los proveedores
            const cat = directus.items('Categorias');



            try {
                await cat.createOne({
                    Nombre: name,
                    Descripcion: descripcion,

                });

                this.addcat = false
                this.getCat()



            } catch (error) {
                console.log(error);
            } finally {

            }
        },

        async createProveedor(local_id) {
            //se obtienen todos los proveedores
            this.loadingSaved = true
            const provee = directus.items('Proveedores');
            const locla = directus.items('Locales');





            try {
                let result = await provee.createOne({
                    Nombre: this.proveedor.Nombre,
                    RIF: this.proveedor.RIF,
                    Ubicacion: this.proveedor.Ubicacion,
                    local_id: local_id.value,
                    Informacion: this.proveedor.Informacion

                });




                await locla.updateOne(local_id.value, {

                    proveedor_id: result.id,


                });

                this.checkedNames.forEach(dato => {

                    this.createRelacion(result.id, dato)


                })






                this.proveedor.id = result.id
                console.log(this.proveedor)


                console.log(result)


                this.getProv()
                this.saved = true
                this.loadingSaved = false



            } catch (error) {
                console.log(error);
                this.loadingSaved = false
            } finally {

            }
        },

        async getRelacion(id) {
            const relacion = directus.items('Proveedores_Categorias');





            try {



                let result = await relacion.readByQuery({
                    fields: ['id'],
                    filter: {

                        Proveedores_id: {
                            _eq: id
                        },


                    }


                });
                console.log(result.data)

                result.data.forEach(dato => {

                    console.log(dato.id)

                    this.deleteRelacion(dato.id)


                })





            } catch (error) {
                console.log(error);

            } finally {

            }
        },

        async updateProveedor(local_id) {
            this.loadingSaved = true
            const uP = directus.items('Proveedores');
            const locla = directus.items('Locales');
            console.log(this.proveedor)

            try {

                let result = await uP.updateOne(this.proveedor.id, {
                    Nombre: this.proveedor.Nombre,
                    RIF: this.proveedor.RIF,
                    Ubicacion: this.proveedor.Ubicacion,
                    local_id: local_id.value,
                    Informacion: this.proveedor.Informacion

                });

                await locla.updateOne(local_id.value, {

                    proveedor_id: this.proveedor.id,


                });



                await this.getRelacion(this.proveedor.id)

                this.checkedNames.forEach(dato => {

                    this.createRelacion(this.proveedor.id, dato)


                })

                this.loadingSaved = false




            } catch (error) {
                console.log(error);
                this.loadingSaved = false

            } finally {

            }
        },

        async createRelacion(id, category_id) {
            const relacion = directus.items('Proveedores_Categorias');
            console.log(category_id)




            try {



                await relacion.createOne({
                    Proveedores_id: id,
                    Categorias_id: category_id,


                });





            } catch (error) {
                console.log(error);

            } finally {

            }
        },




        async getProv() {

            console.log('getprov')
            const prov = directus.items('Proveedores');



            try {
                this.proveedores = await prov.readByQuery({})






            } catch (error) {
                console.log(error);

            } finally {

            }
        },

        async deletePublic(id) {
            this.loadingDelete = true
            this.dato = id


            const publicidad = directus.items('Publicidad');



            try {
                await publicidad.deleteOne(id);


                this.getPubli(this.proveedor.id)
                console.log('borrado')
                this.dato = ""
                this.loadingDelete = false



            } catch (error) {
                console.log(error);

            } finally {

            }
        },

        async deleteRelacion(id) {
            const derela = directus.items('Proveedores_Categorias');
            console.log('borrando relacion')

            try {
                await derela.deleteOne(id);


                this.getCatbyidprovee(this.proveedor.id)





            } catch (error) {
                console.log(error);

            } finally {

            }
        },

        async deleteProveedor(id) {
            this.loadingDelete = true
            this.dato = id


            const prov = directus.items('Proveedores');



            try {

                await this.getRelacion(id)

                await prov.deleteOne(id);


                await this.getProv()

                this.result = this.proveedores.data

                this.loadingDelete = false
                this.dato = ""




            } catch (error) {
                console.log(error);

            } finally {

            }
        },

        async getPubli(id) {
            //se obtienen todos los proveedores
            const pu = directus.items('Publicidad');




            try {
                this.publicidad = await pu.readByQuery({

                    filter: {

                        Proveedor_id: {
                            _eq: id
                        },
                    }
                })

                this.logo = this.publicidad.data.find(element => element.Nombre === "logo");
                this.banner = this.publicidad.data.find(element => element.Nombre === "banner");


                let i = 0
                this.ofertas = []
                this.publicidad.data.forEach(dato => {

                    if (dato.Nombre === "oferta") {
                        this.ofertas[i] = dato

                        i = i + 1

                        console.log('actualizando')


                    }













                });



                console.log(this.ofertas)



            } catch (error) {
                console.log(error);
            } finally {

            }
        },


        async encodeFileAsBase64URL(file) {
            return new Promise((resolve) => {
                const reader = new FileReader();
                reader.addEventListener('loadend', () => {
                    resolve(reader.result);
                });
                reader.readAsDataURL(file);
            });
        },

        async leerImagen(event) {
            // Convierto la primera imagen del input en una ruta Base64
            const base64URL = await this.encodeFileAsBase64URL(event.target.files[0]);

            // Anyado la ruta Base64 a la imagen
            this.image = base64URL
            this.ready = true
        },



        async getProvbyid(id) {
            this.agregar = false
            this.logo = ""
            this.proveedor = []
            this.local = ""
            this.ofertas = []
            this.checkedNames = []
                //se obtienen todos los proveedores
            const prov = directus.items('Proveedores');




            try {
                this.proveedor = await prov.readOne(id)


                this.local = this.locales.data.find(element => element.proveedor_id === id);
                this.getPubli(id)
                this.getCatbyidprovee(id)
                this.getlocales()






            } catch (error) {
                console.log(error);
            } finally {

            }
        },

        async getCatbyid(id) {
            router.push("/home")
            this.loadingBig = true
            this.result = []
                //se obtienen los id de los prveedores asociados a dicha categoria
            const cat = directus.items('Proveedores_Categorias');



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
                this.getlocales()


                let i = 0
                this.categobyid.data.forEach(dato => {


                    let resp = this.proveedores.data.find(element => element.id === dato.Proveedores_id);

                    if (resp != undefined) {
                        this.result[i] = resp

                        i = i + 1

                    }

                    resp = undefined



                });
                this.loadingBig = false



            } catch (error) {
                console.log(error);
                this.loadingBig = false
            } finally {

            }
        },

        async getCatbyidprovee(id) {
            const cat = directus.items('Proveedores_Categorias');



            try {
                let categobyidprovedor = await cat.readByQuery(

                    {
                        fields: ['Categorias_id'],

                        filter: {

                            Proveedores_id: {
                                _eq: id
                            },
                        }
                    }, )
                let i = 0
                categobyidprovedor.data.forEach(dato => {
                    this.checkedNames[i] = dato.Categorias_id
                    i = i + 1






                })







            } catch (error) {
                console.log(error);
                this.loadingBig = false
            } finally {

            }
        },



        async createPublici(id) {
            this.loadingPublici = true

            const pu = directus.items('Publicidad');
            console.log(id)




            try {
                if (this.change) {


                    let query = this.publicidad.data.find(element => element.Nombre === "logo");

                    if (query === undefined) {

                        await pu.createOne({
                            Nombre: "logo",
                            Image: this.image,
                            Proveedor_id: id

                        });


                        this.getPubli(id)

                    } else {

                        await pu.updateOne(query.id, {

                            Image: this.image

                        });

                        this.getPubli(id)

                    }
                    this.loadingPublici = false
                    this.addpubl = false




                } else {

                    if ((!this.editar && !this.change) && !this.ofer) {
                        console.log('banner')

                        let query = this.publicidad.data.find(element => element.Nombre === "banner");

                        if (query === undefined) {
                            console.log(' creando banner')

                            await pu.createOne({
                                Nombre: "banner",
                                Image: this.image,
                                Proveedor_id: id

                            });


                            this.getPubli(id)
                            this.loadingPublici = false
                            this.addpubl = false

                        } else {
                            console.log('editando banner')

                            await pu.updateOne(query.id, {

                                Image: this.image

                            });

                            this.getPubli(id)
                            this.loadingPublici = false
                            this.addpubl = false

                        }




                    } else {

                        console.log('creando oferta')

                        await pu.createOne({
                            Nombre: "oferta",
                            Image: this.image,
                            Proveedor_id: id

                        });

                        this.getPubli(id)
                        this.loadingPublici = false
                        this.addpubl = false
                    }


                }







            } catch (error) {
                console.log(error);
                this.loadingBig = false
            } finally {

            }



        },

        async getCat() {
            const cate = directus.items('Categorias');



            try {
                this.categories = await cate.readByQuery(

                    {}, )




            } catch (error) {
                console.log(error);
            } finally {

            }
        },
        async getlocales() {
            const loc = directus.items('Locales');



            try {
                this.locales = await loc.readByQuery(

                    {}, )
                let i = 0
                this.disponibles = []
                this.locales.data.forEach(dato => {

                    if (dato.proveedor_id === null) {
                        this.disponibles[i] = dato.numero

                        i = i + 1



                    }













                });






            } catch (error) {
                console.log(error);
            } finally {

            }
        },


        async getProveebyQuery(query) {
            this.loadingSearch = true,
                this.error = false
            this.agregar = false

            const provee = directus.items('Proveedores');

            this.result = []


            if (query != undefined) {
                this.loadingBig = true

                try {
                    let result = await provee.readByQuery(

                        {
                            filter: {

                                Nombre: {
                                    _contains: query
                                },
                            }


                        }, )

                    this.getlocales()

                    this.result = result.data



                    this.loadingBig = false
                    this.loadingSearch = false

                    if (!this.loadingSession) {
                        router.push("/home")
                    }




                } catch (error) {
                    console.log(error);
                    this.loadingSearch = false
                } finally {

                }


            } else {
                this.error = true
            }


        },



        logout() {


            signOut(auth)
                .then(() => {
                    this.loadingSession = false
                    router.push("/")
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