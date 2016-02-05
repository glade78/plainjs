/**
 * Created by Gaurang on 5/11/2015.
 */

 var moduleConfig = {"module_id": "FileManagementModule", "moduleCls": "com.abc.modules.FileModule",
    "controllers": [
        { "controller_id": "mo_FileManagement", "classsrc": "com.app.filemanage.Filemanagement", "packageFile" : "mo_FileManagement.js",
            "views": [
                { "view_id": "v_TransferFiles", "htmltmpl": "views/view1.xml", "viewstate": "default", "mediatorCls": "null","modelref" :"m_TransferFiles"},
                { "view_id": "v_FileSystems", "htmltmpl": "views/view2.xml", "viewstate": "default", "mediatorCls": "null", "modelref" :"m_FileSystems"}
            ],

            "models": [
                { "model_id": "m_TransferFiles", "voCls": "com.app.models.vo.TransferFilesVO"},
                { "model_id": "m_FileSystems", "voCls": "com.app.models.vo.FilesSystemVO"}
            ],

            "services": [
                { "service_id": "s_FileManagement", "classSrc": "service.FilemanagementService" }
            ],

            "routes":[
                {"url":'/', "action" : 'home#index'},
                {"url": "settings", "action" : 'settings#index'},
                {"url":'users', "action" : 'users#list'},
                {"url":'users/:id/edit', "action": 'users#edit'}
            ],

            "classPackage":[
                {"classSrc" : "com.app.filemanage.Filemanagement", "clsFilePath":"Filemanagement.js"},
                {"classSrc" : "com.app.filemanage.Filemanagement", "clsFilePath":"Filemanagement.js"}
            ],

            "requirelib":[
                {"libname":"jquery", "libsrcfile":"jquery.9.0.js"}
            ]
        }
    ]
};

 //var contextConfig = JSON.parse(controllers);

console.log(moduleConfig.controllers[0].controller_id);

// View should be register with View Manager
// routes should be register with Route Manager
// services should be register with Service Manager
// Library should be register with Library Manager
// Model should be register with Model Manager
// Module should be register with ModuleManager
// Controller is register with Module
//

