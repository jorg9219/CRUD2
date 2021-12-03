<?php
class conectar{
protected $dbh;
protected function Conexion(){
    try{
$conectar = $this->dbh = new PDO("mysql:host=localhost;dbname=crud2","root","");
return $conectar;
    }
        catch(Exeption $e){
            print "¡Error BD!: " . $e->getMessage() . "<br/>";
            die();
        }
    }


public function set_names(){
    return $this->dbh->query("SET_NAMES 'utf8'");
}

}
?>