import java.awt.Color;
import java.awt.Font;
import java.awt.Image;

import javax.swing.BorderFactory;
import javax.swing.ImageIcon;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.border.Border;

public class Test {
 public static void main (String[] args) {
     ImageIcon imageIcon = new ImageIcon("pic.png");
     Image image = imageIcon.getImage();
     Image newImg = image.getScaledInstance(250, 250, java.awt.Image.SCALE_SMOOTH);
     imageIcon = new ImageIcon(newImg);

     Border border = BorderFactory.createLineBorder(new Color(0xf5dada), 10);
     
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
     label.setBounds(23, 23, 350, 350);

     JPanel panel = new JPanel();
     panel.setBackground(Color.CYAN);
     panel.setBounds(80, 80, 400, 400);
     panel.setLayout(null);
     panel.add(label);
     panel.setVisible(false);

     JButton button = new JButton();
     button.setBounds(225, 515, 100, 35);
     button.addActionListener(e -> panel.setVisible(true));
     button.setText("Click Me!");
     button.setFocusable(false);
    //  button.setIcon(imageIcon);
    button.setFont(new Font("Comic Sans", Font.HANGING_BASELINE, 12));
    button.setForeground(Color.MAGENTA);
    button.setBackground(Color.LIGHT_GRAY);
    button.setBorder(BorderFactory.createLineBorder(Color.BLACK, 2));

    JFrame frame = new JFrame();
    frame.setSize(600, 600);
    frame.setTitle("Hayden's Test Project");
    frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    frame.setResizable(false);
    frame.setVisible(true);
    frame.add(panel);
    frame.add(button);
    frame.setIconImage(imageIcon.getImage());
    frame.getContentPane().setBackground(new Color(21, 103, 112));
    frame.setLayout(null);
    frame.setLocationRelativeTo(null);


 }
}