import { useEffect, useState } from 'react';
export interface Props {
    praiseAllahText: string,
}



export default function PraiseAllah({  praiseAllahText } : Props) {
  const [currentTheme, setCurrentTheme] = useState<string | null>(null);

  useEffect(() => {
    // This code only runs on the client side

    setCurrentTheme(localStorage.getItem("theme"));
  }, []); // Empty dependency array means this runs once on mount



        return (
            <div className={"praise-allah-container"}>

              <span className={"praise-allah-text"}
                    data-theme={currentTheme || 'dark'}>
                {praiseAllahText}
              </span>

            </div>
        )


}

