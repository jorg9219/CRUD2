<?php
class producto extends Conectar{
    public function get_producto(){
        $conectar= parent::Conexion();
        parent::set_names();
        $sql="SELECT * FROM tm_producto WHERE est=1";
        $sql=$conectar->prepare($sql);
        $sql->execute();
        return $resultado=$sql->fetchAll();
    }

    public function get_producto_x_id($prod_id){
        $conectar= parent::conexion();
        parent::set_names();
        $sql="SELECT * FROM tm_producto WHERE prod_id = ?";
        $sql=$conectar->prepare($sql);
        $sql->bindValue(1,$prod_id);
        $sql->execute();
        return $resultado=$sql->fetchAll();
    }

    public function delete_producto($prod_id){
        $conectar= parent::conexion();
        parent::set_names();
        $sql="UPDATE tm_producto
        SET
         est=0,
         fech_elim=now()
         WHERE
         prod_id = ?"; //MJOB - te falto el ? 
        echo $sql; //MJOB - si tienes alguna duda de por que no se inserta o elimina siempre imprime el SQL para q lo ejecutes en el mysql
        $sql=$conectar->prepare($sql);
       
        $sql->bindValue(1,$prod_id);
        $sql->execute();
        return $resultado=$sql->fetchAll();
    }

    public function insert_producto($prod_nom){
        $conectar= parent::conexion();
        parent::set_names();
        // son 5 parametros             1           2           3           4       5           1    2     3     4      5
        $sql="INSERT INTO tm_producto (prod_nom, fech_crea, fech_modi, fech_elim, est) VALUES ( ?, now(), now(), NULL,  1);
        ";
        echo $sql;
        $sql=$conectar->prepare($sql);
        $sql->bindValue(1,$prod_nom);
        $sql->execute();
        return $resultado=$sql->fetchAll();
    }


    public function update_producto($prod_id,$prod_nom){
        $conectar= parent::conexion();
        parent::set_names();
        $sql="UPDATE tm_producto
        SET
         prod_nom=?,
         fech_modi=now()
         WHERE
         prod_id = ";
        $sql=$conectar->prepare($sql);
        $sql->bindValue(1,$prod_id);
        $sql->bindValue(1,$prod_nom);
        $sql->execute();
        return $resultado=$sql->fetchAll();
    }



}

?>