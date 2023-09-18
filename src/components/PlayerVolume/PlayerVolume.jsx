import { Slider, Stack, IconButton } from "@mui/material";
import {VolumeDown, VolumeUp, VolumeOff} from "@mui/icons-material"
import { useState, useRef, useEffect } from "react";

const PlayerVolume = ({spotifyApi, player}) => {
    const [volume, setVolume] = useState(50)

    function usePrevious(value) {
        const ref = useRef();
        useEffect(() => {
          ref.current = value; //assign the value of ref to the argument
        },[value]); //this code will run when the value of 'value' changes
        return ref.current; //in the end, return the current ref value.
      }
    const preVol = usePrevious(volume)


    const handleVolumeChange = async (value) => {
        try {
            await player.setVolume(value / 100)
        }catch(e){
            console.error(e)
        }
    }
    return ( 
        <Stack direction={'row'} spacing={2} alignItems={'center'} sx={{width: 150, color: 'text.secondary', }}>
            <IconButton sx={{ color: 'text.primary' }} onClick={()=>{volume > 0 ? setVolume(0) : setVolume(()=>volume === 0 ? 25 : preVol)}}>
            {volume === 0 ? <VolumeOff/> : volume < 50 ? <VolumeDown/> : <VolumeUp/>} 
            </IconButton>
            <Slider min={0} max={100} step={1} value={volume} onChange={(e, value)=>setVolume(value)} onChangeCommitted={async(e, value)=>{handleVolumeChange(value)}}/>   
        </Stack>
     );
}
 
export default PlayerVolume;