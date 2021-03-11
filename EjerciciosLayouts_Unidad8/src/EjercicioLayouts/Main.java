package EjercicioLayouts;

import java.io.IOException;

import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Scene;
import javafx.scene.layout.BorderPane;
import javafx.stage.Stage;

public class Main extends Application {
	private Stage primaryStage;
	private BorderPane mainLayout;
	private FXMLLoader loader;
	@Override
	public void start(Stage primaryStage) {
		this.primaryStage = primaryStage;
		this.primaryStage.setTitle("AddressApp");
		initRootLayout();
	}
	public void initRootLayout() {
		try {
			//Cargamos el XML
			loader = new FXMLLoader();
			loader.setLocation(Main.class.getResource("MainLayouts.fxml"));
			mainLayout = (BorderPane) loader.load();
			
			//Montamos la escena
			Scene scene = new Scene(mainLayout);
			primaryStage.setScene(scene);
			primaryStage.show();
			
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	public static void main(String[] args) {
		launch(args);
	}
}
