import { Notifyer } from "./Notifyer.js";
import { Timer } from "./Timer.js"

const App = {
    async start(){
        try {
            const time = 25 * 60
            Timer.init(time)

            // await Notifyer.init()
            // Notifyer.notify({
            //     title:"Hora do post",
            //     body:"Crie algum conteúdo para ajudar a comunidade."
            // })

        } catch (err) {
            console.error(err.message)
        }
    }
}

export { App }