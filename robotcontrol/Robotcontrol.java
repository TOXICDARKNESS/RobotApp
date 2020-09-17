/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package robotcontrol;
import java.nio.ByteBuffer;
import java.nio.IntBuffer;
import org.omg.CORBA.TIMEOUT;
import org.usb4java.BufferUtils;
import org.usb4java.DeviceHandle;
import org.usb4java.LibUsb;
import org.usb4java.LibUsbException;
import org.usb4java.Transfer;
import org.usb4java.TransferCallback;

import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import org.usb4java.BufferUtils;
import org.usb4java.DeviceHandle;
import org.usb4java.LibUsb;
import org.usb4java.LibUsbException;
import org.usb4java.Transfer;
import org.usb4java.TransferCallback;
import org.usb4java.*;
/**
 *
 * @author danie
 */
public class Robotcontrol {

    
    private static byte OUT_ENDPOINT;
    private static int TIMEOUT = 100;
    private static int height = 480;
    private static int width = 480;
    
    public static byte VENDOR_ID = (byte) 0x1267;
    public static byte PRODUCT_ID = (byte) 0;
    
    public static byte STOP_HAND = (byte) 0x03; // 0000 0011
    public static byte OPEN_HAND = (byte) 0x02; // 0000 0010
    public static byte CLOSE_HAND = (byte) 0x01; // 0000 0001
    public static byte STOP_WRIST = 0x0C; 
    public static byte WRIST_UP = 0x04; // 0000 0100
    public static byte WRIST_DOWN = 0x08; // 0000 1000
    public static byte STOP_ELBOW = 0x30; // 0011 0000
    public static byte ELBOW_UP = (byte) 0x10; // 0001 0000
    public static byte ELBOW_DOWN = 0x20; // 0010 0000
    public static byte STOP_SHOULDER = (byte) 0xC0; // 1100 0000
    public static byte SHOULDER_UP = (byte) 0x80; // 0100 0000
    public static byte SHOULDER_DOWN = 0x40; // 1000 0000
    public static byte STOP_BASE = 0x03; // 0000 0011
    public static byte BASE_CLOCKWISE = 0x01; // 0000 0001
    public static byte BASE_COUNTER_CLOCKWISE = 0x02; // 0000 0010
    public static byte LED_ON = 0x01; // 0000 0001
    public static byte LED_OFF = 0x01; // 0000 0001
    public static byte CLEAR = 0x00;
    
    public static void main(String[] args) {
        write(BASE_CLOCKWISE);
    }
    
    public static void write(byte data)
        {
            DeviceHandle handle = LibUsb.openDeviceWithVidPid(null, VENDOR_ID, PRODUCT_ID);
          ByteBuffer buffer = BufferUtils.allocateByteBuffer(data);
          buffer.put(data);
          IntBuffer transferred = BufferUtils.allocateIntBuffer();
          int result = LibUsb.bulkTransfer(handle, OUT_ENDPOINT, buffer,
            transferred, TIMEOUT);
          if (result != LibUsb.SUCCESS)
          {
            throw new LibUsbException("Unable to send data", result);
          }
          System.out.println(transferred.get() + " bytes sent to device");
        }
    
}
