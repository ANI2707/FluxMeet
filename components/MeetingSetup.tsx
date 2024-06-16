"use client";
import { DeviceSettings, VideoPreview, useCall } from "@stream-io/video-react-sdk";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";

const MeetingSetup = ({setIsSetupComplete}:{setIsSetupComplete:(value:boolean)=>void}) => {
  const [isMicCamToogledOn, setIsMicCamToggledOn] = useState(false);

  const call = useCall();

  if (!call) {
    throw new Error("usecall must be used within StreamCall component");
  }
  useEffect(() => {
    if (isMicCamToogledOn) {
      call?.camera.disable();
      call?.camera.disable();
    } else {
      call?.camera.enable();
      call?.microphone.enable();
    }
  }, [isMicCamToogledOn, call?.camera, call?.microphone]);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-3 text-white">
      <h1 className="text-2xl font-bold">Setup</h1>
      <VideoPreview />
      <div className="flex h-16 items-center justify-center gap-3">
        <label className="felx items-center justify-center gap-2 font-medium">
          <input type="checkbox" checked={isMicCamToogledOn} onChange={(e)=>setIsMicCamToggledOn(e.target.checked)}/>
          Join with mic and camera off
        </label>
        <DeviceSettings/>
      </div>
      <Button className="rounded-md bg-green-500 px-4 py-2.5" onClick={()=>{
        call.join();
        setIsSetupComplete(true);
        }}>Join meeting</Button>
    </div>
  );
};

export default MeetingSetup;
