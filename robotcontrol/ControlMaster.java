/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package robotcontrol;

import java.lang.reflect.Field;
import javax.swing.JFrame;

/**
 *
 * @author danie
 */

public class ControlMaster {

    public static boolean recogRunning = false;

    public static void main(String[] args) {
        
            
        System.loadLibrary("opencv_java420");
        JFrame x = new JFrame();
        FaceDetection y = new FaceDetection();
        x.setSize(500, 500);
        
        
        
        x.setVisible(true);
        y.setVisible(true);
        
        
        
            
        

    }

    

}
