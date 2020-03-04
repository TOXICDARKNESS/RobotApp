/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package robotcontrol;

import com.github.sarxos.webcam.*;
import static robotcontrol.ControlMaster.*;
import java.awt.image.BufferedImage;
import java.awt.image.DataBufferByte;
import org.opencv.core.Mat;
import org.opencv.core.MatOfByte;
import org.opencv.core.MatOfRect;
import org.opencv.core.Rect;
import org.opencv.objdetect.CascadeClassifier;
import org.opencv.videoio.VideoCapture;

/**
 *
 * @author danie
 */
public class FacialRecogniton {

    private FacialRecogniton myThread = null;
    int count = 0;
    VideoCapture webSource = null;
    Mat frame = new Mat();
    MatOfByte mem = new MatOfByte();
    CascadeClassifier faceDetector = new CascadeClassifier(FacialRecogniton.class.getResource("haarcascade_frontalface_alt.xml").getPath().substring(1));
    MatOfRect faceDetections = new MatOfRect();

    public void recogStart() {
        Webcam webcam = Webcam.getDefault();
        webcam.setViewSize(WebcamResolution.VGA.getSize());

        BufferedImage currentImage;

        while (recogRunning = true) {

            currentImage = webcam.getImage();

            byte[] pixels = ((DataBufferByte) currentImage.getRaster().getDataBuffer()).getData();
            
            frame.put(0, 0, pixels);
            
            faceDetector.detectMultiScale(frame, faceDetections);
            for (Rect rect : faceDetections.toArray()) {
                // System.out.println("ttt");
                PositionClass newPos = new PositionClass(rect.x, rect.y);
                
            }

        }
    
       

    }
    public void FacialRecogniton() {
            System.out.println(FacialRecogniton.class.getResource("haarcascade_frontalface_alt.xml").getPath().substring(1));
        }

}
