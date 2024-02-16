import java.awt.Color;
import java.awt.Font;
import java.awt.Image;

import javax.swing.BorderFactory;
import javax.swing.ImageIcon;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.border.Border;

public class Test {
 public static void main (String[] args) {
     ImageIcon imageIcon = new ImageIcon("pic.png");
     Image image = imageIcon.getImage();
     Image newImg = image.getScaledInstance(250, 250, java.awt.Image.SCALE_SMOOTH);
     imageIcon = new ImageIcon(newImg);

     Border border =BorderFactory.createLineBorder(new Color(0xf5dada), 10);
     
     JLabel label = new JLabel();
     label.setText("Hayden's Test Project!");
     label.setIcon(imageIcon);
     label.setHorizontalTextPosition(JLabel.CENTER);
     label.setVerticalTextPosition(JLabel.BOTTOM);
     label.setForeground(new Color(0xf5dada));
     label.setFont(new Font("Serif", Font.ITALIC, 24));
     label.setIconTextGap(10);
     label.setBackground(Color.black);
     label.setOpaque(true);
     label.setBorder(border);
     label.setHorizontalAlignment(JLabel.CENTER);
     label.setVerticalAlignment(JLabel.CENTER);
     label.setBounds(115, 115, 350, 350);

    JFrame frame = new JFrame();
    frame.setSize(600, 600);
    frame.setTitle("Hayden's Test");
    frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    frame.setResizable(false);
    frame.setVisible(true);
    frame.add(label);
    frame.setIconImage(imageIcon.getImage());
    frame.getContentPane().setBackground(new Color(21, 103, 112));
    frame.setLayout(null);


 }
}