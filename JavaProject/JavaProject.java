package JavaProject;

import java.awt.Font;

import javax.swing.ImageIcon;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JOptionPane;

import java.awt.FlowLayout;

//import API's needed here:


public class JavaProject 
{  

/*--------------------------------------------------------------------------------
main method below: 
includes access specifier - public - required for main, 
(other access specifier options: private & protected)
static (does not require an instance of the class to be created 
for method to run ) , 
return type: "void" (means the method will not return a value ), 
method identifier: "main" 
(all apps must have one main method, 
as it marks the start/entry point of the program when executed), 
arguments/parameters: ( ) data to be sent to the method - 
(more details when methods are covered)
---------------------------------------------------------------------------------*/        
public static void main(String args[ ]) 
        {
               //create any objects if needed (i.e. scanner for keyboard input)
                ImageIcon javaBeansIcon = new ImageIcon("JavaProject/assets/javaBeansIcon.png");

                ImageIcon javaBG = new ImageIcon("JavaProject/assets/javaBG.jpg");

                JButton button = new JButton();
                button.setHorizontalAlignment(JButton.CENTER);
                button.setVerticalAlignment(JButton.BOTTOM);
                
                JLabel label = new JLabel();
                label.setText("Welcome to Java Beans' Mathematical Game!");
                label.setIcon(javaBG);
                label.setHorizontalTextPosition(JLabel.CENTER);
                label.setVerticalTextPosition(JLabel.CENTER);
                label.setFont(new Font("Serif", Font.BOLD, 24));
                label.add(button);

                JFrame frame = new JFrame();
                frame.setVisible(true);
                frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
                frame.setTitle("Java Beans' Project");
                frame.setLayout(new FlowLayout());
                frame.setIconImage(javaBeansIcon.getImage());
                frame.add(label);
                frame.pack();
                frame.setLocationRelativeTo(null);
                
                // JOptionPane.showOptionDialog(null, "WOuld you like to see the game rules", "Game's Rule", JOptionPane.YES_NO_OPTION, JOptionPane.INFORMATION_MESSAGE, javaBeansIcon, null, 0);

                // JFrame frame1 = new JFrame();
                // frame1.setVisible(true);
                // frame1.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
                // frame1.setLocationRelativeTo(null);
              //declare data storage space (constants and variables)   

              //get  input as required by program specifications

              //process data as required by program specifications

              //display results as required by program specifications
				  
				  
         } //closing main method
} //closing class header
