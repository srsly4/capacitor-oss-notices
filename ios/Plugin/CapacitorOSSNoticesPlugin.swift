import Foundation
import Capacitor
import Carte
import simd


@objc(CapacitorOSSNoticesPlugin)
public class CapacitorOSSNoticesPlugin: CAPPlugin {

    @objc func showNotices(_ call: CAPPluginCall) {
        DispatchQueue.main.async {
            let carteViewController = CarteViewController()
            let navController = UINavigationController(rootViewController: carteViewController)
            self.bridge?.viewController?.present(navController, animated: true, completion: nil)
        }
        call.resolve()
    }
}
