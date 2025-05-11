package trip;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Trip {
	
	@Id
	int sno;
	String name;
	int cost;
	String place;
	
	public int getSno() {
		return sno;
	}
	public void setSno(int sno) {
		this.sno = sno;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getCost() {
		return cost;
	}
	public void setCost(int cost) {
		this.cost = cost;
	}
	public String getPlace() {
		return place;
	}
	public void setPlace(String place) {
		this.place = place;
	}
	@Override
	public String toString() {
		return "Trip [sno=" + sno + ", name=" + name + ", cost=" + cost + ", place=" + place + ", getSno()=" + getSno()
				+ ", getName()=" + getName() + ", getCost()=" + getCost() + ", getPlace()=" + getPlace() + "]";
	}
	
	
}
