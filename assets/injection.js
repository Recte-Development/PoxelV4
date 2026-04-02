export async function loadAndInitPlugin() {
const del = indexedDB.deleteDatabase("UnityCache");

  del.onsuccess = () => {
      console.log("UnityCache deleted");
  };

  del.onerror = () => {
      console.error("Failed to delete UnityCache");
  };

  del.onblocked = () => {
      console.warn("Delete blocked — close other tabs");
      //location.reload();
  };

  
  if (!window.ctx)
  {
    const ctx = window.UnityWebModkit.Runtime.createPlugin({
      name: "Hax",
      version: "1.0.0",
      referencedAssemblies: [
                  'ACTk.Runtime.dll',
                  'System.Runtime.InteropServices.dll',
                  'mscorlib.dll',
                  'Assembly-CSharp.dll',
                  'UnityEngine.CoreModule.dll',
                  'UnityEngine.PhysicsModule.dll',
                  "UnityEngine.IMGUIModule.dll",
                  'Unity.TextMeshPro.dll',
                  'UnityEngine.AnimationModule.dll',
                  'ColyseusSDK.dll'
              ]
    });

    window.ctx = ctx;
    return ctx;
  }
  else
  {
    return ctx;
  }
}
