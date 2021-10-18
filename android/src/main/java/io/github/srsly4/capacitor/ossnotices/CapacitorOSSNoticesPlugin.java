package io.github.srsly4.capacitor.ossnotices;


import static androidx.core.content.ContextCompat.startActivity;

import android.content.Intent;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.google.android.gms.oss.licenses.OssLicensesMenuActivity;

@CapacitorPlugin(name = "CapacitorOSSNotices")
public class CapacitorOSSNoticesPlugin extends Plugin {

    @PluginMethod
    public void showNotices(PluginCall call) {
        Intent intent = new Intent(this.getContext(), OssLicensesMenuActivity.class);
        this.getContext().startActivity(intent);
    }
}
