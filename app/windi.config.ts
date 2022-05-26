import { defineConfig } from "windicss/helpers";

export default defineConfig({
    attributify: {
        prefix: "w",
        
    },
    safelist:["fixed", ],
    theme: {
        extend:{
            fontFamily: {
            primary: ['Roboto', 'sans-serif'],
            secondary:[ 'Open Sans', 'sans-serif']
            },
            content: {
                blank: ["''"]
            }
        
        }

        
    }
})